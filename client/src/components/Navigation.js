import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Logo from '../images/Logo.png';
import e from 'express';

function Navigation() {
  // set page pathname
  const pathname = window.location.pathname;
  const path = pathname === '/' ? 'home' : pathname.substring(1);
  const [activeItem, setActiveItem] = useState(path);

  // set event to to change `name` of link to active
  const handleItemClick = (e, { name }) => setActiveItem(name);

  // If user is not logged in
  if (true) {
    return (
      <div>
        <Menu pointing secondary size='large' color='red'>
          <Menu.Item
            className='nav-link'
            name='home'
            active={activeItem === 'home'}
            onClick={handleItemClick}
            as={Link}
            to='/'
          >
            <img
              className='ui avatar image'
              style={{ marginTop: 15 }}
              src={Logo}
              alt='app-logo'
            />
          </Menu.Item>

          <Menu.Menu position='right'>
            <Menu.Item
              className='nav-link'
              name='login'
              active={activeItem === 'login'}
              onClick={handleItemClick}
              as={Link}
              to='/login'
            />

            <Menu.Item
              className='nav-link'
              name='register'
              active={activeItem === 'register'}
              onClick={handleItemClick}
              as={Link}
              to='/register'
            />

            <Menu.Item
              className='nav-link'
              name='about'
              active={activeItem === 'about'}
              onClick={handleItemClick}
              as={Link}
              to='/about'
            />
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
  // if user is logged in
  else {
    <div>
      {/* TODO  -  set to HOME when user is logged in */}
      <Menu pointing secondary size='large' color='red'>
        <Menu.Item
          className='nav-link'
          name='home'
          active={activeItem === 'home'}
          onClick={handleItemClick}
          as={Link}
          to='/'
        >
          <img
            className='ui avatar image'
            style={{ marginTop: 15 }}
            src={Logo}
            alt='app-logo'
          />
        </Menu.Item>

        <Menu.Item
          className='nav-link'
          name='profile'
          active={activeItem === 'profile'}
          onClick={handleItemClick}
          as={Link}
          to='/profile'
        />
        {/* set to home without authentication */}
        <Menu.Menu position='right'>
          <Menu.Item
            className='nav-link'
            name='logout'
            active={activeItem === 'logout'}
            onClick={handleItemClick}
            as={Link}
            to='/'
          />
        </Menu.Menu>
      </Menu>
    </div>;
  }
}

export default Navigation;
