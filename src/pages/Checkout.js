import { useNavigate } from 'react-router-dom';

import classes from './Checkout.module.css';

const Checkout = () => {
  const navigate = useNavigate();

  const confirmHandler = () => {
    navigate('/', { replace: true });
  };

  return (
    <section className={classes.checkout}>
      <h1 className={classes.title}>주문 완료</h1>
      <p className={classes.text}>주문이 완료되었습니다.</p>
      <button className={classes.btn} onClick={confirmHandler}>
        확인
      </button>
    </section>
  );
};

export default Checkout;
