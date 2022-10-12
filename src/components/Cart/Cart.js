import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { uiActions } from '../../store/ui-slice';
import CartList from './CartList';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const activeCart = useSelector((state) => state.ui.activeCart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  useEffect(() => {
    if (cart.length < 1) {
      dispatch(uiActions.cartDisabled());
    }
  }, [cart, dispatch]);

  const hideModalHandler = () => {
    dispatch(uiActions.toggleModal());
  };

  return (
    <Modal>
      <div className={classes['cart-wrap']}>
        <CartList />
      </div>
      <div className={classes.total} aria-label="총 금액">
        <span>총 금액</span>
        <span className={classes.price}>{totalPrice.toLocaleString()} 원</span>
      </div>
      <div className={classes.actions} aria-hidden>
        <button type="button" className={classes['button--alt']} onClick={hideModalHandler}>
          닫기
        </button>
        {!activeCart && (
          <button type="button" className={classes['button--disabled']} disabled={!activeCart}>
            주문하기
          </button>
        )}
        {activeCart && (
          <button type="button" className={classes.button} onClick={hideModalHandler}>
            <Link to="/order">주문하기</Link>
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
