import React, { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1 className={classes.logo}>
          <img src="/images/logo.png" />
        </h1>
        <HeaderCartButton />
      </header>
      <div className={classes.bnr}>
        <img src="/images/fruits-bnr.jpg" />
      </div>
    </Fragment>
  );
};

export default Header;
