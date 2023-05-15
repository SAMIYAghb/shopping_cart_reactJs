import React from 'react'
import { Stack } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { useShoppingCart } from '../../Context/ShoppingCartContext';
import data from '../../data/data.json'
import formatCurrecy from './../Utils/FormatCurrency';


const CartItem = ({id, quantity}) => {
    const { removeItemFromCart,closeCart, openCart } = useShoppingCart()  

    const item = data.find(i => i.id === id)
    if(item == null){return null} 

  return (
    <Stack direction="horizontal" gap={2} className=''>
        <img src={item.imgUrl} alt="cart-img"style={{width:'125px', height:'75px', objectFit:'cover'}} />
        <div className="me-auto">
            <div className="">
                {item.name}{" "}
                {quantity > 1 && <span className='text-muted' style={{fontSize:'0.65rem'}}>x {quantity}</span>}
                
            </div>
            <div className="text-muted"  style={{fontSize:'0.75rem'}}>
                    {formatCurrecy(item.price)}
            </div>
            

        </div>
        <div className="">
                {formatCurrecy(item.price * quantity)}
                
        </div>
        <Button onClick={()=>(removeItemFromCart(id))} variant='outline-danfer' size='sm' >
            &times;
        </Button>
   
    </Stack>
  )
}

export default CartItem