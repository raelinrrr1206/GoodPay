import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../action/index';


const Submit = (props) => {

    // const dispatch = useDispatch();
    // //const error = useSelector(state => state.burgerBuilder.error);

    // switch (props.submitType) {
    //     case ('Payment'):

    //         break;
    //     case ('Confirmation'):

    //         break;
    //     default:

    // }

    // const gogoSubmitAction = () => dispatch(actions.submitAction(props.submitType));

    const gogoSubmitName = (e) => {
        // gogoSubmitAction();
    }


    return (
        <div className="App-submit">
            <button className="submit-back">BACK</button>
            <button onClick={gogoSubmitName} form='my-form' type="submit" className="submit-continue">CONTINUE</button>
        </div>
    );
}

export default Submit;