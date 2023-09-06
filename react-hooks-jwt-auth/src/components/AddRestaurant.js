import React, { useState, useRef } from 'react';
import classes from './AddRestaurant.css';
import { useNavigate } from 'react-router-dom';


const isEmpty = value => value.trim()==='';
const isFiveChars = value => value.trim().length === 5;
const isTenChars = value => value.trim().length ===10;
const AddRestaurant = () => {
    const navigate = useNavigate();
    const [formInputValidity, setFormInputValidity] = useState({
        name:true,
        phone:true,
        street:true,
        postalcode:true,
        city:true        
    });
    const nameInputRef = useRef();
    const streetInputRed = useRef();
    const cityInputRef = useRef();
    const postalInputRef = useRef();
    const phoneInputRef = useRef();

    const confirmHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRed.current.value;
        const entetedPostal = postalInputRef.current.value;
        const enteredCity = cityInputRef.current.value;
        const enteredPhone = phoneInputRef.current.value;
    
        const isNameValid = !isEmpty(enteredName);
        const isStreetValid = !isEmpty(enteredStreet);
        const isCityValid = !isEmpty(enteredCity);
        const isPostalValid = isFiveChars(entetedPostal);
        const isPhoneValid = isTenChars(enteredPhone);
    
        setFormInputValidity({name:isNameValid, street:isStreetValid, postalcode:isPostalValid, city:isCityValid, phone:isPhoneValid });
    
        const formIsValid = isCityValid && isNameValid && isPostalValid && isStreetValid && isPhoneValid;
        if(!formIsValid){
            return;
        }
        setTimeout(() => {
            navigate('/menus');
        }, 3000);
    };

    const nameClasses = `${classes.control} ${formInputValidity.name ? '' : classes.invalid}`;
    const streetClasses = `${classes.control} ${formInputValidity.street ? '' : classes.invalid}`;
    const postalClasses = `${classes.control} ${formInputValidity.postalcode ? '' : classes.invalid}`;
    const cityClasses = `${classes.control} ${formInputValidity.city ? '' : classes.invalid}`;
    const phoneClasses = `${classes.control} ${formInputValidity.phone ? '' : classes.invalid}`;

    return (
        <form className={classes.form} onSubmit={confirmHandler}>
          <div className={nameClasses}>
            <label htmlFor='name'>Restaurant Name</label>
            <input type='text' id='name' ref={nameInputRef}/>
            {!formInputValidity.name && <p>Please enter valid name</p>}
          </div>
          <div className={phoneClasses}>
            <label htmlFor='name'>Phone</label>
            <input type='text' id='phone' ref={phoneInputRef}/>
            {!formInputValidity.phone && <p>Please enter valid phone</p>}
          </div>
          <div className={streetClasses}>
            <label htmlFor='street'>Street</label>
            <input type='text' id='street' ref={streetInputRed} />
            {!formInputValidity.street && <p>Please enter valid street</p>}
          </div>
          <div className={postalClasses}>
            <label htmlFor='postal'>Postal Code</label>
            <input type='text' id='postal' ref={postalInputRef} />
            {!formInputValidity.postalcode && <p>Please enter valid postal</p>}
          </div>
          <div className={cityClasses}>
            <label htmlFor='city'>City</label>
            <input type='text' id='city' ref={cityInputRef} />
            {!formInputValidity.city && <p>Please enter valid city</p>}
          </div>
          <div className={classes.actions}>
            <button className={classes.submit}>Submit</button>
          </div>
        </form>
      );
}
export default AddRestaurant;

