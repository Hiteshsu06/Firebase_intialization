import React, { useState } from "react";
import "../style/Product.css";
// import { useDispatch, useSelector } from "react-redux";
// import { ADD, DEL, SWAP, SWAP2 } from "../redux/actions/Action.js";

const Product = ({ state, dispatch }) => {
  const fetchedArray = state.product;
  const addButtonHandler = (data) => {
    if (data.add_delete === true) {
      dispatch({ type: "ADD_CART", payload: data });
      dispatch({ type: "ADD_DELETE_STATUS", payload: data.id });
    } else if (data.add_delete === false) {
      dispatch({ type: "ADD_DELETE_STATUS_POST", payload: data.id });
      dispatch({ type: "DELETE", payload: data.id });
    }
  };

  return (
    <div>
      <div id="productHeading">Product</div>
      <div id="wholeContainer">
        {fetchedArray.map((data, index) => {
          return (
            <div className="card" id="card" key={index}>
              <div className="cardimagecontainer">
                <img
                  src={data.image}
                  className="card-img-top"
                  id="cardimage"
                  alt="image"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title" id="cardname">
                  {data.title}
                </h5>
                <p className="card-text">₹{data.price}</p>
                {data.add_delete === true ? (
                  <button
                    type="button"
                    id="cartbuttongreen"
                    className="btn btn-success"
                    onClick={() => addButtonHandler(data)}
                  >
                    Add to Cart
                  </button>
                ) : (
                  <button
                    type="button"
                    id="cartbuttonyellow"
                    className="btn btn-warning"
                    onClick={() => addButtonHandler(data)}
                  >
                    Remove from cart
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
