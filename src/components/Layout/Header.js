import React, { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import logo from '../../assets/logo.png';
import bnrImg from '../../assets/fruits-bnr.jpg';
import classes from './Header.module.css';

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1 className={classes.logo}>
          <img src={logo} />
        </h1>
        <HeaderCartButton />
      </header>
      <div className={classes.bnr}>
        <img src={bnrImg} />
      </div>
    </Fragment>
  );
};

export default Header;
