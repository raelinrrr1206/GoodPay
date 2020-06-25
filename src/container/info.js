import React from 'react';
// import Fragment from 'react';
//import { useDispatch, useSelector } from 'react-redux';

const Info = (props) => {

    let formData = null;
    let formValue = null;

    switch (props.formType) {
        case ('Payment'):
            formData = [{
                columnZero: "Credit Card Info",
                columnOne: 'NAME ON CARD',
                columnTwo: 'CARD NUMBER',
                columnThree: 'EXP MONTH',
                columnFour: 'EXP YEAR',
                columnFive: 'CVC NUMBER',
            }, {
                columnZero: "Billing Info",
                columnOne: 'FULL NAME',
                columnTwo: 'BILLING ADDRESS',
                columnThree: 'CITY',
                columnFour: 'ZIP CODE',
                columnFive: 'COUNTRY',
            }]
            formValue = [{
                columnZero: "JJ2",
                columnOne: "1234-5678-9012-3456",
                columnTwo: "888",
                columnThree: "09",
                columnFive: "26",
            }, {
                columnZero: "JJ3",
                columnOne: "板橋",
                columnTwo: "什麼",
                columnThree: "大同區",
                columnFive: "123",
            }]
            break;
        default:
            formData = {
                columnZero: "Shipping Info",
                columnOne: 'FULL NAME',
                columnTwo: 'BILLING ADDRESS',
                columnThree: 'CITY',
                columnFour: 'ZIP CODE',
                columnFive: 'COUNTRY',
            }
            formValue = {
                columnOne: "JJ1",
                columnTwo: "板橋",
                columnThree: "什麼",
                columnFour: "大同區",
                columnFive: "123",
            }
    }

    const [state, setState] = React.useState(formValue)

    console.log("formData", formData);
    function handleChange(evt) {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        });
        console.log('state', [evt.target.name], value);
    }

    const changeAndValidate = (e) => {
        if (e) {
            handleChange(e)
        }
        console.log('同步 name', state)
    }

    React.useEffect(() => {
        changeAndValidate();
    });

    const handleSubmit = (e) => {
        console.log('送出 ', state.columnOne, state.columnTwo, state.columnThree, state.columnFour, state.columnFive);
        e.preventDefault();
    }


    let formContent = (
        <div>
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
                    <span className="select-title-right">&nbsp;&nbsp;&nbsp;&nbsp;{formData.columnFour}</span>
                    <select onChange={handleChange}
                        value={state.columnFour}
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



    return (
        <div className={state.ifBorder ? 'App-info Form-border' : 'App-info'}>
            <span className="form-title" >{formData.columnZero}</span>
            <form id='my-form' onSubmit={handleSubmit} className="entire-form" action="" method="post">
                {formContent}
            </form>
        </div>
    );
}



export default Info;