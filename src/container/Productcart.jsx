import React, { useEffect, useState, useReducer } from "react";
import Product from "./Product";
import Cart from "./Cart";
import "../style/Productcart.css";
import Axios from "axios";
import { initialState, reducer } from "../redux/reducers/Reducer";
// import { useDispatch } from "react-redux";
// import { FETCHDATA } from "../redux/actions/Action.js";

const Productcart = () => {
  // const dispatch = useDispatch();
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    Axios.get(`https://fakestoreapi.com/products`)
      .then((e) => {
        const array = e.data;
        const addingData = { quantity: 1, add_delete: true };
        const fetchedArray = array.map(function (e) {
          //adding new properties in object
          return Object.assign({}, e, addingData);
        });
        // dispatch(FETCHDATA(fetchedArray));
        dispatch({ type: "FETCH_DATA", payload: fetchedArray });
      })
      .catch((error) => {
        alert(error);
      })
      .finally(() => {
        setLoading(true);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <div id="productCart">
          <div id="product">
            <Product state={state} dispatch={dispatch} />
          </div>
          <div id="cart">
            <Cart state={state} dispatch={dispatch} />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Productcart;
