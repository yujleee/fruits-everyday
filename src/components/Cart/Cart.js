import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { uiActions } from '../../store/ui-slice';
import CartItem from './CartItem';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const hideModalHandler = () => {
    dispatch(uiActions.toggleModal());
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
    <Modal>
      {cartItem}
      <div className={classes.total}>
        <span>총 금액</span>
        <span className={classes.price}>{totalPrice.toLocaleString()} 원</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={hideModalHandler}>
          닫기
        </button>
        <button className={classes.button}>
          <Link to="/order">주문하기</Link>
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
