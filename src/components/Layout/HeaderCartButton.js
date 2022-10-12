import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard } from '@fortawesome/free-solid-svg-icons';

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
    <div className={classes['btn-wrap']} aria-hidden>
      <Link to={'/orders'} className={classes.button} aria-label="주문확인">
        <FontAwesomeIcon icon={faClipboard} className={classes.icon} />
      </Link>
      <button className={`${classes.button} ${classes.cart}`} onClick={toggleModalHandler} aria-label="장바구니">
        <span className={classes.icon} aria-hidden>
          <CartIcon />
        </span>
        <span className={classes.badge} aria-label={`장바구니 ${quantity}개`}>
          {quantity}
        </span>
      </button>
    </div>
  );
};

export default HeaderCartButton;
