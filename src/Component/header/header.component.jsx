import React from 'react';

import { Link } from 'react-router-dom';
import './header.styles.scss';

const Header = () => (
<div className='header-menu'>
  <div className='options'>
    <h2>
      
    </h2>
    <Link className='option' to='/'>
    HOME
    </Link>
    <Link className='option' to='/Articles'>
    ARTICLES
    </Link>
    {/* <Link className='option' to='/Contact'>
    CONTACT
    </Link> */}
  </div>

</div>
);

export default Header;