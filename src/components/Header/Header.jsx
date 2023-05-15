import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import { SlBasket } from 'react-icons/sl';
import { useShoppingCart } from '../../Context/ShoppingCartContext';


export const Header = () => {
  const {openCart , cartQuantity} = useShoppingCart()
  return (
    <header  className='bg-white shadow-sm mb-3'>
    <Navbar>
        <Container>
          <Nav className="me-auto">
            {/* <Nav.Link to="/home" as={NavLink}>Home</Nav.Link> */}
            <Nav.Link to="/store" as={NavLink}>Store</Nav.Link>
            <Nav.Link to="/about" as={NavLink}>About</Nav.Link>
          </Nav>
          <div className="position-relative">
                <Button onClick={openCart} variant="primary" className='rounded-circle' style={{ width:'3rem', height: '3rem'}}>
                <SlBasket/>
                </Button>
                <div  style={{ width:'1rem', height: '1rem', position:'absolute', top:'0'}}className="rounded-circle bg-danger d-flex justify-content-center align-items-center">
                 {cartQuantity}
                  </div>
          </div>
          
        </Container>
      </Navbar>
    </header>
  )
}
