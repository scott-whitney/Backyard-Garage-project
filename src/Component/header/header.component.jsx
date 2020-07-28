import React from 'react';

import { Link } from 'react-router-dom';
import './header.styles.scss';

const Header = () => (
<div className='header'>
  <div className='options'>
    <Link className='option' to='/Home'>
    HOME
    </Link>
    <Link className='option' to='/Articles'>
    ARTICLES
    </Link>
    <Link className='option' to='/'>
    CONTACT
    </Link>
  </div>

</div>
);

export default Header;