import { createContext, useState, useContext, useEffect } from "react";
import ShoppingCart from './../components/ShoppingCart/ShoppingCart';

// localStorage
const initialCartItems = localStorage.getItem("shopping-cart") ? JSON.parse(localStorage.getItem("shopping-cart")):[]

const ShoppingCartContext = createContext({});

const ShoppingCartProvider = ({ children }) => {
  const [isOpen, setisOpen] = useState(false);

  const [cartItems, setcartItems] = useState(initialCartItems);

  useEffect(()=>{
    localStorage.setItem("shopping-cart", JSON.stringify(cartItems))
  },[cartItems])


  //panier
  const openCart =()=>{
    setisOpen(true)
  }
  const closeCart =()=>{
    setisOpen(false)
  }
  // panier petit icon pour connaitre le nombre de produits dans le panier
  const cartQuantity = cartItems.reduce((quantity, item)=>
  item.quantity + quantity, 0)



  //permet de savoir le nombre ou la quantité des produits
  const getItemsQuantity = (id) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0; //return the quantity of items or 0
  };

  //+++
  const increaseCartQuantity = (id) => {
    setcartItems((currentItems) => {
      // find permet de faire un check pour savoir si l item exist deja ou non
      //ce produit n'est pas dans le panier=> on l'ajoute => donc la quantuté=1
      if (cartItems.find((item) => item.id === id) == null) {
        return [...currentItems, { id, quantity: 1 }]; //spreed operator
      } else {
        //ce produit est déja dans le pânier => on fait +n de la qunatité
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  //-- ----
  const decreaseCartQuantity = (id) => {
    setcartItems((currentItems) => {
      if (cartItems.find((item) => item.id === id) == null) {
        // si l id que je vous ai envoyé n'existe pas  retourn the reste of items
        return currentItems.filter((item) => item.id !== id);
      } else {
        //
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  //
  const removeItemFromCart = (id) => {
    setcartItems((currentItems) =>
      currentItems.filter((item) => item.id !== id)
    );
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        getItemsQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeItemFromCart,
        openCart,
        closeCart,
        cartQuantity
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen}/>
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};
