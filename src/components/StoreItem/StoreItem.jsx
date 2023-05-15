import React from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useShoppingCart } from "../../Context/ShoppingCartContext";
import formatCurrecy from "./../Utils/FormatCurrency";

export const StoreItem = ({ id, name, price, imgUrl }) => {
  const {
    getItemsQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeItemFromCart,
  } = useShoppingCart();
  const quantity = getItemsQuantity(id);
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={imgUrl}
          style={{ height: "200px", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title className="d-flex justify-content-between align-items-center">
            <span className="fs-2">{name}</span>
            <span className="me-2 text-muted">{formatCurrecy(price)}</span>
          </Card.Title>

          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <div className="">
            {quantity === 0 ? (
              <Button onClick={()=>{increaseCartQuantity(id)}} variant="primary" className="w-100">
                Add To Cart
              </Button>
            ) : (
              <div className="d-flex align-items-center flex-column">
                <div
                  style={{ gap: "0.5rem" }}
                  className="d-flex align-items-center justify-content-center  mb-3"
                >
                  <Button onClick={()=>{decreaseCartQuantity(id)}}>-</Button>
                  <span className="fs-3">{quantity} in cart</span>
                  <Button onClick={()=>{increaseCartQuantity(id)}}>+</Button>
                </div>
                <Button onClick={()=>{removeItemFromCart(id)}} variant="danger" size="sm">
                  Remove
                </Button>
              </div>
            )}
          </div>
        </Card.Body>
      </Card>
    </>
  );
};
