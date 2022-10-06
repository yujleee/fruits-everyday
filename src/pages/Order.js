import { useSelector } from 'react-redux';

import Header from '../components/Layout/Header';
import CartItem from '../components/Cart/CartItem';
import Input from '../components/UI/Input';

const Order = () => {
  const cart = useSelector((state) => state.cart.items);

  const cartItem = (
    <ul>
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
    <>
      <Header />
      <section>
        {cartItem}
        <Input id="name" label="name" />
      </section>
    </>
  );
};

export default Order;
