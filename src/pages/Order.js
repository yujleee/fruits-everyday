import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import CartItem from '../components/Cart/CartItem';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useInput from '../hooks/use-input';
import { cartActions } from '../store/cart-slice';
import classes from './Order.module.css';

const checkEmailIsValid = (email) => {
  const regex = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  return email !== '' && email !== 'undefined' && regex.test(email);
};

const checkPhoneIsValid = (phone) => {
  const regex = /01[016789]-[^0][0-9]{2,3}-[0-9]{3,4}/;
  return phone !== '' && phone !== 'undefined' && regex.test(phone);
};

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
    const response = await fetch('https://fruits-everyday-default-rtdb.firebaseio.com/order.json', {
      method: 'POST',
      body: JSON.stringify({
        user: {
          name: enteredName,
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

  const cartItem = (
    <ul className={classes['cart-list']}>
      {cart.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
          image={item.image}
        />
      ))}
    </ul>
  );

  return (
    <>
      {isLoading && <LoadingSpinner />}
      <section className={classes['order-wrap']}>
        <h1>주문하기</h1>
        {cartItem}
        <div className={classes.total} aria-label="가격">
          <strong>총 {totalPrice.toLocaleString()} 원</strong>
        </div>
        <article className={classes['form-wrap']}>
          <h2>배송 정보</h2>
          <form onSubmit={submitFormHandler}>
            <div className={classes['input-wrap']} aria-label="이름입력">
              <label htmlFor="name">이름</label>
              <input type="text" id="name" value={enteredName} onChange={nameChangeHandler} onBlur={nameBlurHandler} />
              {nameHasError && <p className={classes['error-text']}>이름은 2글자 이상이어야 합니다.</p>}
            </div>
            <div className={classes['input-wrap']} aria-label="주소입력">
              <label htmlFor="address">주소</label>
              <input
                type="text"
                id="address"
                value={enteredAddress}
                onChange={addressChangeHandler}
                onBlur={addressBlurHandler}
              />
              {addressHasError && <p className={classes['error-text']}>주소를 올바르게 입력해주세요.</p>}
            </div>
            <div className={classes['input-wrap']} aria-label="휴대번호입력">
              <label htmlFor="phone">휴대번호</label>
              <input
                type="tel"
                id="phone"
                value={enteredPhone}
                onChange={phoneChangeHandler}
                onBlur={phoneBlurHandler}
              />
              {phoneHasError && <p className={classes['error-text']}>휴대번호를 올바르게 입력해주세요.</p>}
            </div>
            <div className={classes['input-wrap']} aria-label="이메일입력">
              <label htmlFor="email">이메일</label>
              <input
                type="email"
                id="email"
                value={enteredEmail}
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
              />
              {emailHasError && <p className={classes['error-text']}>메일주소를 올바르게 입력해주세요.</p>}
            </div>
            <div className={classes['btn-wrap']} aria-hidden>
              <button className={classes.submit}>주문하기</button>
            </div>
          </form>
        </article>
      </section>
    </>
  );
};

export default Order;
