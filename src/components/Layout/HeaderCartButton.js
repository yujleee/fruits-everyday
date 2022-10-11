import { useSelector, useDispatch } from 'react-redux';

import { uiActions } from '../../store/ui-slice';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = () => {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.cart.totalQuantity);

  const toggleModalHandler = () => {
    dispatch(uiActions.toggleModal());
  };

  return (
    <button className={classes.button} onClick={toggleModalHandler}>
      <span className={classes.icon} aria-hidden>
        <CartIcon />
      </span>
      <span className={classes.badge} aria-label={`장바구니 ${quantity}개`}>
        {quantity}
      </span>
    </button>
  );
};

export default HeaderCartButton;
