import React from 'react';
import './Main.css';
import { Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Aboutpng from '../images/About.png';
import Nav from '../components/Nav';

const About = () => (
  <div>
    <Nav />
    <Image size='extra-large' src={Aboutpng} as={Link} to='/about' />
  </div>
);

export default About;
