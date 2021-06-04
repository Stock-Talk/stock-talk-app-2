import React, { useState } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import './Nav.css';

function UserNav() {
  // set page pathname
  const pathname = window.location.pathname;
  const path = pathname === '/' ? 'home' : pathname.substring(1);
  const [activeItem, setActiveItem] = useState(path);

  // set event to to change `name` of link to active
  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <div className='container' style={{ marginTop: 30 }}>
      <Menu pointing secondary size='large' color='red'>
        <Menu.Item
          className='nav-link'
          name='Home'
          active={activeItem === 'home'}
          onClick={handleItemClick}
          as={Link}
          to='/home'
        >
          <Icon name='home' />
        </Menu.Item>

        <Menu.Item
          className='nav-link'
          name='profile'
          active={activeItem === 'profile'}
          onClick={handleItemClick}
          as={Link}
          to='/profile'
        >
          {/* <Icon name='user outline' /> */}
        </Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item
            className='nav-link'
            name='search'
            active={activeItem === 'search'}
            onClick={handleItemClick}
            as={Link}
            to='/search'
          >
            <Icon name='search' />
          </Menu.Item>

          <Menu.Item
            className='nav-link'
            name='logout'
            active={activeItem === 'logout'}
            onClick={handleItemClick}
            as={Link}
            to='/'
          >
            {/* <Icon name='sign-out' /> */}
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
}

export default UserNav;
