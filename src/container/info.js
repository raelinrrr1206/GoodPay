import React from 'react';
// import Fragment from 'react';
//import { useDispatch, useSelector } from 'react-redux';

const Info = (props) => {

    let formData = null;
    let formData2 = null;
    let formValue = null;
    let formValue2 = null;

    switch (props.formType) {
        case ('Payment'):
            formData = {
                columnZero: "Credit Card Info",
                columnOne: 'NAME ON CARD',
                columnTwo: 'CARD NUMBER',
                columnThree: 'EXP MONTH',
                columnFour: 'EXP YEAR',
                columnFive: 'CVC NUMBER',
            }

            formData2 = {
                columnZero: "Billing Info",
                columnOne: 'FULL NAME',
                columnTwo: 'BILLING ADDRESS',
                columnThree: 'CITY',
                columnFour: 'ZIP CODE',
                columnFive: 'REMARKS',
            }
            formValue = {
                columnOne: "John Li",
                columnTwo: "1234-5678-9012-3456",
                columnThree: "022",
                columnFour: "2022",
                columnFive: "809",
            }
            formValue2 = {
                columnOne: "Abby Tsai",
                columnTwo: "新北板橋",
                columnThree: "北投區",
                columnFour: "CDE",
                columnFive: "電子帳單",
            }
            break;
        default:
            formData = {
                columnZero: "Shipping Info",
                columnOne: 'FULL NAME',
                columnTwo: 'BILLING ADDRESS',
                columnThree: 'CITY',
                columnFour: 'ZIP CODE',
                columnFive: 'REMARKS',
            }
            formValue = {
                columnOne: "Rae Lin",
                columnTwo: "新北新莊",
                columnThree: "北投區",
                columnFour: "789",
                columnFive: "下午兩點後收",
            }
    }

    const [state, setState] = React.useState(formValue)
    const [state2, setState2] = React.useState(formValue2)

    //console.log("formData", formData);
    function handleChange(evt) {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        });
        //console.log('state', [evt.target.name], value);
    }

    function handleChange2(evt) {
        const value = evt.target.value;
        setState2({
            ...state2,
            [evt.target.name]: value
        });
        //console.log('state', [evt.target.name], value);
    }

    const changeAndValidate = (e) => {
        if (e) {
            handleChange(e)
        }
        //console.log('同步 name', state)
    }

    React.useEffect(() => {
        changeAndValidate();
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('送出 ', state.columnOne, state.columnTwo, state.columnThree, state.columnFour, state.columnFive);
        console.log('送出2 ', state2 && state2.columnOne, state2 && state2.columnTwo, state2 && state2.columnThree, state2 && state2.columnFour, state2 && state2.columnFive);
        //e.preventDefault();
        return false;
    }

    let formContent = (
        <div className={props.formType === 'shipping' ? null : 'payment-div'}>
            <div className="single-line">
                <label className="line-label" htmlFor="name" >{formData.columnOne}</label>
                <input
                    onChange={handleChange}
                    value={state.columnOne}
                    className="line-input"
                    type="text"
                    id="name"
                    name="columnOne"
                />
            </div>
            <div className="single-line">
                <label className="line-label" htmlFor="mail">{formData.columnTwo}</label>
                <input
                    onChange={handleChange}
                    value={state.columnTwo}
                    className="line-input"
                    type="text"
                    id="ADDRESS"
                    name="columnTwo" />
            </div>
            <div className="select-line">
                <div className="select-left">
                    <span className="select-title-left">{formData.columnThree}</span>
                    <select onChange={handleChange}
                        value={state.columnThree}
                        className="select-main"
                        id="simple"
                        name="columnThree">
                        <optgroup label={props.formType === 'shipping' ? '台北市' : '上半'}>
                            <option>{props.formType === 'shipping' ? '中山區' : '011'}</option>
                            <option>{props.formType === 'shipping' ? '大同區' : '022'}</option>
                            <option>{props.formType === 'shipping' ? '北投區' : '033'}</option>
                        </optgroup>
                        <optgroup label={props.formType === 'shipping' ? '新北市' : '下半'}>
                            <option>{props.formType === 'shipping' ? '三重區' : '077'}</option>
                            <option>{props.formType === 'shipping' ? '新莊區' : '088'}</option>
                            <option>{props.formType === 'shipping' ? '板橋區' : '099'}</option>
                        </optgroup>
                    </select>
                </div>
                <div className="select-right">
                    <span className="select-title-right">&nbsp;&nbsp;&nbsp;&nbsp;{formData.columnFour}</span>
                    <select onChange={handleChange}
                        value={state.columnFour}
                        className="select-main"
                        id="simple"
                        name="columnFour">
                        <optgroup label={props.formType === 'shipping' ? '前三碼' : '前幾年'}>
                            <option>{props.formType === 'shipping' ? 'ABC' : '2011'}</option>
                            <option>{props.formType === 'shipping' ? 'CDE' : '2022'}</option>
                            <option>{props.formType === 'shipping' ? 'EFG' : '2033'}</option>
                        </optgroup>
                        <optgroup label={props.formType === 'shipping' ? '後三碼' : '後幾年'}>
                            <option>{props.formType === 'shipping' ? '123' : '2077'}</option>
                            <option>{props.formType === 'shipping' ? '456' : '2088'}</option>
                            <option>{props.formType === 'shipping' ? '789' : '2099'}</option>
                        </optgroup>
                    </select>
                </div>
            </div>
            <div className="single-line">
                <label className="line-label" htmlFor="msg">{formData.columnFive}</label>
                <textarea
                    value={state.columnFive}
                    onChange={handleChange}
                    className="line-input-area"
                    id="msg"
                    name="columnFive">
                </textarea>
            </div>
        </div>
    );

    let formContent2 = (
        <div className={props.formType === 'shipping' ? null : 'payment-div'}>
            <div className="single-line">
                <label className="line-label" htmlFor="name" >{formData2 && formData2.columnOne}</label>
                <input
                    onChange={handleChange2}
                    value={state2 && state2.columnOne}
                    className="line-input"
                    type="text"
                    id="name"
                    name="columnOne"
                />
            </div>
            <div className="single-line">
                <label className="line-label" htmlFor="mail">{formData2 && formData2.columnTwo}</label>
                <input
                    onChange={handleChange2}
                    value={state2 && state2.columnTwo}
                    className="line-input"
                    type="text"
                    id="ADDRESS"
                    name="columnTwo" />
            </div>
            <div className="select-line">
                <div className="select-left">
                    <span className="select-title-left">{formData2 && formData2.columnThree}</span>
                    <select onChange={handleChange2}
                        value={state2 && state2.columnThree}
                        className="select-main"
                        id="simple"
                        name="columnThree">
                        <optgroup label="台北市">
                            <option>中山區</option>
                            <option>大同區</option>
                            <option>北投區</option>
                        </optgroup>
                        <optgroup label="新北市">
                            <option>三重區</option>
                            <option>新莊區</option>
                            <option>板橋區</option>
                        </optgroup>
                    </select>
                </div>
                <div className="select-right">
                    <span className="select-title-right">&nbsp;&nbsp;&nbsp;&nbsp;{formData2 && formData2.columnFour}</span>
                    <select onChange={handleChange2}
                        value={state2 && state2.columnFour}
                        className="select-main"
                        id="simple"
                        name="columnFour">
                        <optgroup label="前三碼">
                            <option>ABC</option>
                            <option>CDE</option>
                            <option>EFG</option>
                        </optgroup>
                        <optgroup label="後三碼">
                            <option>123</option>
                            <option>456</option>
                            <option>789</option>
                        </optgroup>
                    </select>
                </div>
            </div>
            <div className="single-line">
                <label className="line-label" htmlFor="msg">{formData2 && formData2.columnFive}</label>
                <textarea
                    value={state2 && state2.columnFive}
                    onChange={handleChange2}
                    className="line-input-area"
                    id="msg"
                    name="columnFive">
                </textarea>
            </div>
        </div>
    );

    return (
        <div className={props.formType === 'shipping' ? 'App-info Form-border' : 'App-info-payment'}>

            <form className={props.formType === 'shipping' ? 'entire-form' : 'entire-form-payment'}
                id='my-form' onSubmit={handleSubmit}>

                <div className={props.formType === 'shipping' ? null : 'form-column'}>

                    <span className={props.formType === 'shipping' ? 'form-title' : 'form-title-payment'} >
                        {props.formType === 'shipping' ? formData.columnZero : null}
                    </span>

                    <span className={props.formType === 'shipping' ? 'form-title' : 'form-title-payment'} >
                        {props.formType === 'shipping' ? null : formData.columnZero}
                    </span>

                    {formContent}
                </div>
                <div className={props.formType === 'shipping' ? null : 'form-column'}>
                    <span className={props.formType === 'shipping' ? 'form-title' : 'form-title-payment'} >
                        {props.formType === 'shipping' ? null : formData2.columnZero}
                    </span>

                    {props.formType === "Payment" ? formContent2 : null}
                </div>
            </form>
        </div>
    );
}



export default Info;