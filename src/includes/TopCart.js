import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {  useSelector } from 'react-redux';

function TopCart() {
  const [amount, setAmount] = useState(null);
//  const {orders} = useSelector((state) => state.cartSlice);
  let orders = useSelector((state) => state.cartSlice);
// console.log("state: ", state)
//  orders = 0;
  const navigate = useNavigate();
  
  useEffect(() => {
    if (orders && orders.length > 0) {
      setAmount(orders.length);
    } 
    else {
      setAmount(null);
    };
  }, [orders]);

  return (
    <div className="header-controls-pic header-controls-cart" onClick={() => navigate('/cart')}>
      {amount !== null ?
      <div>
        <div className="header-controls-cart-full">{amount}</div>
        <div className="header-controls-cart-menu"></div>
      </div> : null}
    </div>
  );
};
export default TopCart;