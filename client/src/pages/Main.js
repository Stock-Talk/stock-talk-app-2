import React from 'react';
import './Main.css';
import MainNav from '../components/MainNav';
import Mainpage from '../images/Mainpage.png';
import { Image } from 'semantic-ui-react';

const Main = () => (
  <div>
    <MainNav />
    <Image
      src={Mainpage}
      as='a'
      size='extra-large'
      href='/login'
      target='_blank'
    />
  </div>
);

export default Main;
