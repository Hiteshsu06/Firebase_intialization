import React, { useState, useEffect } from "react";
import "../style/Cart.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
// import { INC, DEC, DEL, SWAP2 } from "../redux/actions/Action.js";

const Cart = ({ state, dispatch }) => {
  const [price, setPrice] = useState(0);
  const cartData = state.carts;
  let isLoding = cartData.length > 0 ? true : false;
  const incrementCounter = (data) => {
    return dispatch({ type: "INCREMENT", payload: data.id }); // Increment
  };

  const decrementCounter = (data) => {
    if (data.quantity < 2) {
      dispatch({ type: "DELETE", payload: data.id }); // delete operation
      dispatch({ type: "ADD_DELETE_STATUS_POST", payload: data.id }); // flag (remove button to add button)
    } else {
      return dispatch({ type: "DECREMENT", payload: data.id }); // Decrement
    }
  };

  const total = () => {
    let price = 0;
    cartData.map((data) => {
      price = data.price * data.quantity + price; //Total price
    });
    setPrice(price);
  };
  useEffect(() => {
    total();
  }, [total]);

  return (
    <div>
      {isLoding ? (
        <div className="cart">
          <div id="cartTop">
            <div id="cartHeading">Cart</div>
          </div>
          <div id="totalprice">
            <div id="total">
              <b>Total:-₹{price.toFixed(2)}</b>
            </div>
          </div>
          {cartData.map((data, index) => {
            return (
              <div id="cartmiddle" key={index}>
                <div>
                  <img src={data.image} className="cartimage" alt="" />
                </div>
                <div id="pricebutton">
                  <div id="price">
                    <b>Price:-₹</b>
                    {(data.price * data.quantity).toFixed(2)}
                  </div>
                  <div id="buttonhandler">
                    <button
                      className="cartsbutton"
                      onClick={() => decrementCounter(data)}
                    >
                      <AiOutlineMinus />
                    </button>
                    <div id="textbutton">
                      <h5>{data.quantity}</h5>
                    </div>
                    <button
                      className="cartsbutton"
                      onClick={() => incrementCounter(data)}
                    >
                      <AiOutlinePlus />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default Cart;
