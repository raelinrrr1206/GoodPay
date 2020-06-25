import React from 'react';


const Order = () => {


    return (
        <div className="App-order">
            <span className="order-title">Order Summary</span>
            <ul className="order-ul">
                <li className="order-li">
                    <span className="li-left">Items</span>
                    <span className="li-right">USD 19.99</span>
                </li>
                <li className="order-li">
                    <span className="li-left">Shipping & Handling</span>
                    <span className="li-right">USD 9.07</span>
                </li>
                <li className="order-li">
                    <span className="li-left">Total before tax</span>
                    <span className="li-right">USD 29.06</span>
                </li>
                <li className="order-li">
                    <span className="li-left">Estimated tax to be collected</span>
                    <span className="li-right">USD 0.00</span>
                </li>
            </ul>
            <hr className="order-hr"></hr>
            <div className="yellow-total">
                <span className="yellow-left">Order Total</span>
                <span className="yellow-right">USD 29.06</span>
            </div>
        </div>
    );
}



export default Order;