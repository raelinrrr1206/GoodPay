import React from 'react';
import '../sass/app.scss';
import Logo from '../image/logo.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";
import Shipping from '../container/shipping.js';
import Payment from '../container/payment.js';
import Confirmation from '../container/confirmation.js';



const Main = () => {

    return (
        <Router>
            <div className="App-Main">
                <div className="Main-header">
                    <img className="Img-logo" src={Logo} alt={Logo}></img>
                </div>
                <nav className="Nav-header">




                    <div className="limit-width">
                        <NavLink to="/Shipping" className="Nav-section-start">
                            <div className="Nav-circle">
                                <span className="Nav-opt"> 1 </span>
                            </div>
                            <span className="Nav-optText" >
                                SHIPPING
                    </span>
                        </NavLink>

                        <NavLink to="/payment" className="Nav-section">
                            <div className="Nav-circle">
                                <span className="Nav-opt"> 2 </span>
                            </div>
                            <span className="Nav-optText">
                                PAYMENT
                </span>
                        </NavLink>

                        <NavLink to="/confirmation" className="Nav-section-end" activeClassName="selected">
                            <div className="Nav-circle">
                                <span className="Nav-opt"> 3 </span>
                            </div>
                            <span className="Nav-optText">
                                CONFIRMATION
                </span>
                        </NavLink>
                    </div>








                </nav>

                <Switch>
                    <Route path="/Shipping">
                        <Shipping />
                    </Route>
                    <Route path="/payment">
                        <Payment />
                    </Route>
                    <Route path="/confirmation">
                        <Confirmation />
                    </Route>
                </Switch>

            </div>
        </Router>
    );
}


export default Main;