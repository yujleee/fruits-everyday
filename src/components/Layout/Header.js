import { Link } from 'react-router-dom';

import styled from 'styled-components';
import HeaderCartButton from './HeaderCartButton';

const Header = () => {
  return (
    <HeaderWrap>
      <Link to={'/'}>
        <Logo>
          <img src="/images/logo.png" alt="매일과일" />
        </Logo>
      </Link>
      <HeaderCartButton />
    </HeaderWrap>
  );
};

export default Header;

const HeaderWrap = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 99;
  padding: 0 1.6rem;
  background-color: var(--color-white);
`;

const Logo = styled.h1`
  display: flex;
  align-items: center;
  margin-right: auto;

  & > img {
    height: auto;
    display: block;
    width: auto;
    height: 40px;
  }

  @media screen and (min-width: 720px) {
    & > img {
      height: 60px;
    }
  }
`;
