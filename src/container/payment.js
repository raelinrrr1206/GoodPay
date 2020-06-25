import React from 'react';
import ButtonLine from './buttonLine.js';
import Info from './info.js';
import Submit from './submit.js';

const Payment = () => {


    return (
        <div className="App-payment">
            <ButtonLine />
            <div className="Payment-info">
                <Info formType="Payment" />

            </div>
            <div className="App-Shipping-Submit">
                <Submit submitType="Payment" className="Shipping-Submit" />
            </div>
        </div>
    );
}



export default Payment;