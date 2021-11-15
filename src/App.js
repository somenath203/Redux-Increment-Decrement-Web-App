import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/index";

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch(); // this will help trigget incNumber and decNumber and thus increment and decrement number.
  return (
    <>
      <div className="main-div">
        <div className="container">
          <h1>Redux Increment-Decrement Counter</h1>

          <div className="quantity">
            <a className="quantity__minus" title="Decrement" onClick={() => dispatch(decNumber())} href><span>-</span></a>
            <input name="quantity" type="text" className="quantity__input" value={myState} />
            <a className="quantity__plus" title="Increment" onClick={() => dispatch(incNumber())} href><span>+</span></a>
      </div>
        </div>
      </div>
    </>
  );
};

export default App;
