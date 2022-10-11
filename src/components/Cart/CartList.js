import { useSelector } from 'react-redux';

import CartItem from './CartItem';
import classes from './CartItem.module.css';

const CartList = () => {
  const cart = useSelector((state) => state.cart.items);

  return (
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
};

export default CartList;
