import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import CartItem from '../components/Cart/CartItem';
import classesCart from '../components/Cart/CartItem.module.css';
import classes from './Order.module.css';

const YourOrder = () => {
  const navigate = useNavigate();
  const order = useSelector((state) => state.data.userOrder);
  const { address, cart, email, id, name, phone } = order;

  const cartList = (
    <ul className={`${classesCart['cart-list']}`}>
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

  const moveToMainHandler = () => {
    navigate('/', { replace: true });
  };

  return (
    <section className={classes['order-wrap']}>
      <h1>주문확인</h1>
      {cartList}
      <article className={classes['form-wrap']}>
        <h2>배송 정보</h2>
        <form>
          <div className={classes['input-wrap']} aria-label="이름">
            <label htmlFor="name">이름</label>
            <input type="text" id="name" value={name} readOnly />
          </div>

          <div className={classes['input-wrap']} aria-label="주소">
            <label htmlFor="address">주소</label>
            <input type="text" id="address" value={address} readOnly />
          </div>

          <div className={classes['input-wrap']} aria-label="휴대번호">
            <label htmlFor="phone">휴대번호</label>
            <input type="tel" id="phone" value={phone} readOnly />
          </div>

          <div className={classes['input-wrap']} aria-label="이메일">
            <label htmlFor="email">이메일</label>
            <input type="email" id="email" value={email} readOnly />
          </div>

          <div className={classes['btn-wrap']} aria-hidden>
            <button className={classes.submit} onClick={moveToMainHandler}>
              확인
            </button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default YourOrder;
