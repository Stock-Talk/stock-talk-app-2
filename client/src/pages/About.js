import React from 'react';
import './Main.css';
import { Image } from 'semantic-ui-react';
import AboutImage from '../images/About.png';
import Nav from '../components/Nav';

const AboutPage = () => (
  <div>
    <Nav />
    <Image src={AboutImage} alt='About the application'></Image>
  </div>
);
export default AboutPage;
