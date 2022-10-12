import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import useInput from '../hooks/use-input';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import { dataActions } from '../store/data-slice';
import { uiActions } from '../store/ui-slice';
import { checkEmailIsValid } from '../components/UI/Forms';
import classes from './Order.module.css';

const Orders = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const {
    value: enteredName,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput((value) => value.trim().length >= 2);

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((value) => checkEmailIsValid(value));

  const fetchOrders = async () => {
    const response = await fetch('https://fruits-everyday-default-rtdb.firebaseio.com/orders.json');

    if (!response.ok) {
      return;
    }

    const data = await response.json();
    const loadedData = [];

    for (const key in data) {
      loadedData.push({
        id: key,
        name: data[key].user.name,
        phone: data[key].user.phone,
        address: data[key].user.address,
        email: data[key].user.email,
        cart: data[key].cart.map((cartItem) => cartItem),
      });
    }

    const userOrder = loadedData.find((item) => item.name === enteredName && item.email === enteredEmail);

    if (userOrder) {
      dispatch(dataActions.loadUserOrder({ userOrder }));
      dispatch(uiActions.toggleCheckOrder());
      navigate(`/orders/${userOrder.id}`);
    } else {
      alert('일치하는 주문결과가 없습니다.');
    }
  };

  const submitFormHandler = (e) => {
    e.preventDefault();

    if (!nameIsValid || !emailIsValid) {
      return;
    }

    try {
      fetchOrders();
      setIsLoading(true);
    } catch (error) {
      console.log(error);
    }

    resetName();
    resetEmail();
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <LoadingSpinner />}
      <section className={`${classes['order-wrap']} ${'centered'}`}>
        <h1>주문확인</h1>
        <form onSubmit={submitFormHandler}>
          <div className={classes['input-wrap']} aria-label="이름입력">
            <label htmlFor="name">이름</label>
            <input
              type="text"
              placeholder="김리을"
              id="name"
              value={enteredName}
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
            />
            {nameHasError && <p className={classes['error-text']}>이름은 2글자 이상이어야 합니다.</p>}
          </div>

          <div className={classes['input-wrap']} aria-label="이메일입력">
            <label htmlFor="email">이메일</label>
            <input
              type="email"
              id="email"
              placeholder="fruits@everday.com"
              value={enteredEmail}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
            />
            {emailHasError && <p className={classes['error-text']}>메일주소를 올바르게 입력해주세요.</p>}
          </div>
          <div className={classes['btn-wrap']} aria-hidden>
            <button className={classes.submit}>확인하기</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Orders;
