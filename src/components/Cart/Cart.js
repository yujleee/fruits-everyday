import React from 'react';

import classes from './Cart.module.css';

const Cart = () => {
  const cartItem = (
    <ul className={classes['cart-item']}>
      {[
        {
          id: 'f1',
          name: '귤',
          description: '갓 수확한 달콤한 제주 하우스 감귤',
          image: '/images/img-fruits01.jpg',
          price: 23000,
        },
      ].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <React.Fragment>
      {cartItem}
      <div className={classes.total}>
        <span>총 금액</span>
        <span>40000</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}>닫기</button>
        <button className={classes.button}>주문하기</button>
      </div>
    </React.Fragment>
  );
};

export default Cart;
