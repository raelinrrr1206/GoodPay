import React from 'react';


const InfoSec = () => {

    const titleDraw = [];


    return (
        <div className="App-InfoSec">
            <div className="Single-box">
                <div className="title-line">
                    <div className="title-line-left">
                        <div className="title-box">
                            Payment Info
                </div>
                    </div>
                    <div className="title-line-right">
                        <div className="change-box">
                            Change
                </div>
                    </div>
                </div>
                <hr className="infoSec-hr"></hr>
                <div className="content-box-small">

                    <span className="info-textline">Credit Card</span>
                    <span className="info-textline">VISA  Ending in 5002</span>


                </div>
            </div>
            <div className="Single-box">
                <div className="title-line">
                    <div className="title-line-left">
                        <div className="title-box">
                            Shipping Info
        </div>
                    </div>
                    <div className="title-line-right">
                        <div className="change-box">
                            Change
        </div>
                    </div>
                </div>
                <hr className="infoSec-hr"></hr>
                <div className="content-box">



                    <span className="info-textline">Rae Lin</span>
                    <span className="info-textline">+886 912 345 678</span>
                    <span className="info-textline">10F,No4,Ln.787,Shin yi Rd.,DoAn Dist. Taipei,Taiwan(R.O.C)104</span>



                </div>
            </div>
            <div className="Single-box">
                <div className="title-line">
                    <div className="title-line-left">
                        <div className="title-box">
                            Billing Info
        </div>
                    </div>
                    <div className="title-line-right">
                        <div className="change-box">
                            Change
        </div>
                    </div>
                </div>
                <hr className="infoSec-hr"></hr>
                <div className="content-box">


                    <span className="info-textline">Kim Kong</span>
                    <span className="info-textline">+886 920 987 654</span>
                    <span className="info-textline">10F,No4,Ln.787,Zhong Shan Rd.,Zhong Shan Dist. Taipei,Taiwan(R.O.C)104</span>



                </div>
            </div>
        </div>
    );
}



export default InfoSec;