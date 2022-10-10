import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <Link to={'/'}>
          <h1 className={classes.logo}>
            <img src="/images/logo.png" alt="매일과일" />
          </h1>
        </Link>
        <HeaderCartButton />
      </header>
    </Fragment>
  );
};

export default Header;
