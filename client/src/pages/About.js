import React from 'react';
import './Main.css';
import { Image } from 'semantic-ui-react';
import Aboutpng from '../images/About.png';
import Nav from '../components/Nav';

const About = () => (
  <div>
    <Nav />
    <Image
      src={Aboutpng}
      as='a'
      size='extra-large'
      href='/login'
      target='_blank'
    />
  </div>
);

export default About;
