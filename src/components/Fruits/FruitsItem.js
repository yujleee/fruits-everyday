import { useDispatch } from 'react-redux';

import { cartActions } from '../../store/cart-slice';
import { uiActions } from '../../store/ui-slice';
import styled from 'styled-components';

const FruitsItem = ({ id, name, description, price, image }) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      cartActions.addToCart({
        id,
        name,
        price,
        onePiece: price,
        image,
        quantity: 1,
      })
    );

    dispatch(uiActions.cartActive());
  };

  return (
    <Item>
      <div role="img">
        <img src={image} alt={name} />
      </div>
      <Text>{name}</Text>
      <Text>{description}</Text>
      <Text>
        <b>{price.toLocaleString()} 원</b>
      </Text>
      <div>
        <Button type="button" onClick={addToCartHandler}>
          구매하기
        </Button>
      </div>
    </Item>
  );
};

export default FruitsItem;

const Item = styled.li`
  font-size: 1rem;
  width: 200px;
  padding: 1rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
  border-radius: 14px;
  background-color: white;

  @media screen and (min-width: 720px) {
    &:nth-child(4n) {
      margin-right: 0;
    }
  }
`;

const Text = styled.p`
  margin-top: 0.3rem;
  word-break: keep-all;
`;

const Title = styled.title`
  margin-bottom: 0;
  word-break: keep-all;
`;

const Button = styled.button`
  font: inherit;
  cursor: pointer;
  background-color: var(--color-green);
  color: white;
  padding: 0.25rem 4rem;
  margin: 0.5rem 0;
  border-radius: 30px;
  font-weight: bold;

  &:hover,
  &:active {
    background-color: var(--color-green-700);
  }
`;
