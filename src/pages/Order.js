import { React, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import CartList from '../components/Cart/CartList';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useInput from '../hooks/use-input';
import { cartActions } from '../store/cart-slice';
import { checkEmailIsValid, checkPhoneIsValid } from '../components/UI/Forms';
import classes from './Order.module.css';

const Order = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const cart = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const {
    value: enteredName,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput((value) => value.trim().length >= 2);

  const {
    value: enteredAddress,
    isValid: addressIsValid,
    hasError: addressHasError,
    valueChangeHandler: addressChangeHandler,
    valueBlurHandler: addressBlurHandler,
    reset: resetAddress,
  } = useInput((value) => value.trim() !== '');

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((value) => checkEmailIsValid(value));

  const {
    value: enteredPhone,
    isValid: phoneIsValid,
    hasError: phoneHasError,
    valueChangeHandler: phoneChangeHandler,
    valueBlurHandler: phoneBlurHandler,
    reset: resetPhone,
  } = useInput((value) => checkPhoneIsValid(value));

  const submitCartHandler = async () => {
    const response = await fetch('https://fruits-everyday-default-rtdb.firebaseio.com/orders.json', {
      method: 'POST',
      body: JSON.stringify({
        user: {
          name: enteredName,
          phone: enteredPhone,
          address: enteredAddress,
          email: enteredEmail,
        },
        cart: cart,
      }),
    });

    if (!response.ok) {
      return;
    }
  };

  const submitFormHandler = (e) => {
    e.preventDefault();

    if (!nameIsValid || !addressIsValid || !emailIsValid || !phoneIsValid) {
      return;
    }

    try {
      submitCartHandler();
      setIsLoading(true);
    } catch (error) {
      console.log(error);
    }

    resetName();
    resetAddress();
    resetEmail();
    resetPhone();
    dispatch(cartActions.resetCart());
    setIsLoading(false);
    navigate('/checkout', { replace: true });
  };

  return (
    <>
      {isLoading && <LoadingSpinner />}
      <section className={classes['order-wrap']}>
        <h1>????????????</h1>
        <CartList />

        <div className={classes.total} aria-label="??????">
          <strong>??? {totalPrice.toLocaleString()} ???</strong>
        </div>

        <article className={classes['form-wrap']}>
          <h2>?????? ??????</h2>
          <form onSubmit={submitFormHandler}>
            <div className={classes['input-wrap']} aria-label="????????????">
              <label htmlFor="name">??????</label>
              <input
                type="text"
                id="name"
                placeholder="?????????"
                value={enteredName}
                onChange={nameChangeHandler}
                onBlur={nameBlurHandler}
              />
              {nameHasError && <p className={classes['error-text']}>????????? 2?????? ??????????????? ?????????.</p>}
            </div>

            <div className={classes['input-wrap']} aria-label="????????????">
              <label htmlFor="address">??????</label>
              <input
                type="text"
                id="address"
                placeholder="?????????"
                value={enteredAddress}
                onChange={addressChangeHandler}
                onBlur={addressBlurHandler}
              />
              {addressHasError && <p className={classes['error-text']}>????????? ???????????? ??????????????????.</p>}
            </div>

            <div className={classes['input-wrap']} aria-label="??????????????????">
              <label htmlFor="phone">????????????</label>
              <input
                type="tel"
                id="phone"
                placeholder="010-0000-0000"
                value={enteredPhone}
                onChange={phoneChangeHandler}
                onBlur={phoneBlurHandler}
              />
              {phoneHasError && <p className={classes['error-text']}>??????????????? ???????????? ??????????????????.</p>}
            </div>

            <div className={classes['input-wrap']} aria-label="???????????????">
              <label htmlFor="email">?????????</label>
              <input
                type="email"
                id="email"
                placeholder="fruits@everday.com"
                value={enteredEmail}
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
              />
              {emailHasError && <p className={classes['error-text']}>??????????????? ???????????? ??????????????????.</p>}
            </div>

            <div className={classes['btn-wrap']} aria-hidden>
              <button className={classes.submit}>????????????</button>
            </div>
          </form>
        </article>
      </section>
    </>
  );
};

export default Order;
