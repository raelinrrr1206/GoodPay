import React from 'react';
import Order from './order.js';
import Info from './info.js';
import Submit from './submit.js';

const Shipping = () => {


    return (
        <div className="App-Shipping">

            <div className="App-BeRow">
                <Order /><Info formType="shipping" />
            </div>

            <div className="App-Shipping-Submit">
                <Submit submitType="Shipping" className="Shipping-Submit" />
            </div>

        </div>
    );
}



export default Shipping;