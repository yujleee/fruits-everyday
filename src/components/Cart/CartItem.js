import { useSelector, useDispatch } from 'react-redux';

import { cartActions } from '../../store/cart-slice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import classes from './CartItem.module.css';

const CartItem = (props) => {
  const dispatch = useDispatch();
  const checkOrder = useSelector((state) => state.ui.checkOrder);
  const { name, quantity, price, id, image } = props;

  const addToCartHandler = () => {
    dispatch(
      cartActions.addToCart({
        id,
        name,
        price,
        onePiece: price,
        quantity,
        image,
      })
    );
  };

  const removeToCartHandler = () => {
    dispatch(cartActions.removeToCart({ id }));
  };

  return (
    <li className={classes.item} id={id}>
      <header>
        <h3>{name}</h3>
        <div className={classes.price} aria-label="가격">
          <span>{price.toLocaleString()} 원</span>
        </div>
      </header>
      <div className={classes.details} aria-label="상품">
        <div className={classes.image} role="img">
          <img src={image} alt={name} />
        </div>
        <div className={classes.actions} aria-label="수량조절">
          {!checkOrder && (
            <button onClick={removeToCartHandler}>
              <FontAwesomeIcon icon={faMinus} />
            </button>
          )}
          <div className={classes.quantity} aria-label="상품개수">
            {quantity}
          </div>
          {!checkOrder && (
            <button onClick={addToCartHandler}>
              <FontAwesomeIcon icon={faPlus} />
            </button>
          )}
        </div>
      </div>
    </li>
  );
};

export default CartItem;
