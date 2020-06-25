import React from 'react';
import credit from '../image/icon01.png';
import Upay from '../image/icon02.png';
import ATM from '../image/icon03.png';
import COD from '../image/icon04.png';

const ButtonLine = () => {


    return (
        <div className="App-buttonLine">
            <div className="button-grey">
                <img className="button-image" src={credit} alt='credit'></img>
                <span className="button-text">CREDIT CARD</span>
            </div>
            <div className="button-grey">
                <img className="button-image" src={Upay} alt='Upay'></img>
                <span className="button-text">U-Pay</span>
            </div>
            <div className="button-grey">
                <img className="button-image" src={ATM} alt='ATM'></img>
                <span className="button-text">ATM</span>
            </div>
            <div className="button-grey">
                <img className="button-image" src={COD} alt='COD'></img>
                <span className="button-text">COD</span>
            </div>
        </div>
    );
}



export default ButtonLine;