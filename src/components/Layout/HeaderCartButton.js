import { useSelector, useDispatch } from 'react-redux';

import { modalActions } from '../../store/modal-slice';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = () => {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.cart.totalQuantity);

  const toggleModalHandler = () => {
    dispatch(modalActions.toggle());
  };

  return (
    <button className={classes.button} onClick={toggleModalHandler}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default HeaderCartButton;
