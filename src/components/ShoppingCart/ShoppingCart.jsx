import React from 'react'
import Stack from 'react-bootstrap/Stack';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useShoppingCart } from '../../Context/ShoppingCartContext';
import CartItem from './../CartItem/CartItem';
import formatCurrecy from './../Utils/FormatCurrency';
import data from '../../data/data.json'

const ShoppingCart = ({isOpen}) => {
    const {cartItems, closeCart} = useShoppingCart();
    
  return (
    
    <Offcanvas show={isOpen} onHide={closeCart} placement='end'>
    <Offcanvas.Header closeButton>
      <Offcanvas.Title>Cart</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
        <Stack gap={3}>
            {cartItems.map((item, index)=>
            <CartItem key={item.id} {...item}/>)}
            
            <div className='mt-4 fs-5 fw-bold ms-auto'>
            total: {formatCurrecy(
                cartItems.reduce((total, cartItem) => {
                    const item = data.find((i)=> i.id === cartItem.id)
                    return total + (item?.price || 0) * cartItem.quantity;
                }, 0)
            )}
        </div>
        </Stack>
        
        
    </Offcanvas.Body>
  </Offcanvas>
  
  )
}

export default ShoppingCart
