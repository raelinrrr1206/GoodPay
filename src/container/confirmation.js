import React from 'react';
import Order from './order.js';
import InfoSec from './infoSec.js';
import Submit from './submit.js';

const Confirmation = () => {


    return (
        <div className="App-Shipping">
            <div className="App-BeRow-confirmation">
                <Order />
                <InfoSec />
            </div>
            <div className="App-Shipping-Submit">
                <Submit submitType="Confirmation" className="Shipping-Submit" />
            </div>
        </div>
    );
}



export default Confirmation;