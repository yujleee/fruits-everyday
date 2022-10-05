import { useDispatch } from 'react-redux';

import { cartActions } from '../../../store/cart-slice';
import classes from './FruitsItem.module.css';

const FruitsItem = ({ id, name, description, price, image }) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      cartActions.addToCart({
        id,
        name,
        price,
        image,
        quantity: 1,
      })
    );
  };

  return (
    <li className={classes['fruits-item']} area-label="fruits-item">
      <div className={classes.img} aria-label="image">
        <img src={image} alt={name} />
      </div>
      <h4>{name}</h4>
      <p>{description}</p>
      <p classes={classes['fruit-price']}>
        <b>{price.toLocaleString()} 원</b>
      </p>
      <div>
        <button onClick={addToCartHandler}>구매하기</button>
      </div>
    </li>
  );
};

export default FruitsItem;
