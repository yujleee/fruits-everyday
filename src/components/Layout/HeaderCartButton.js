import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard } from '@fortawesome/free-solid-svg-icons';

import { uiActions } from '../../store/ui-slice';
import CartIcon from '../Cart/CartIcon';
import styled from 'styled-components';

const HeaderCartButton = () => {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.cart.totalQuantity);

  const toggleModalHandler = () => {
    dispatch(uiActions.toggleModal());
  };

  return (
    <ButtonWrap aria-hidden>
      <Button aria-label="주문확인">
        <Link to={'/orders'}>
          <Icon>
            <FontAwesomeIcon icon={faClipboard} />
          </Icon>
        </Link>
      </Button>
      <Button onClick={toggleModalHandler} aria-label="장바구니">
        <Icon aria-hidden>
          <CartIcon />
        </Icon>
        <Badge aria-label={`장바구니 ${quantity}개`}>{quantity}</Badge>
      </Button>
    </ButtonWrap>
  );
};

export default HeaderCartButton;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 2.4rem;

  @media screen and (min-width: 720px) {
    margin-right: 3rem;

    & > .icon {
      width: 1.35rem;
      height: 1.35rem;
    }

    & > .badge {
      padding: 0.25rem;
    }

    & > .button:first-child::after {
      margin: 0 0.8rem 0 1.2rem;
    }

    & > .icon {
      width: 1.2rem;
      height: 1.2rem;
    }
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: 700;
  color: var(--color-gray-300);
  background-color: transparent;
  transition: background-color 300ms ease-in-out;
  margin: 0;
  padding: 0.2rem;

  &:hover,
  &:active {
    color: var(--color-green-700);
    background-color: transparent;
  }

  &:first-child::after {
    content: '';
    width: 1px;
    height: 16px;
    background-color: var(--color-border);
    margin: 0 0.4rem 0 0.8rem;
  }

  &.cart {
    color: var(--color-green);
  }
`;

const Icon = styled.span`
  width: 1.3rem;
  height: 1.3rem;
`;

const Badge = styled.span`
  color: var(--color-green);
  padding: 0.25rem;
  font-weight: bold;
  min-width: 20px;
  letter-spacing: -0.01em;
`;
