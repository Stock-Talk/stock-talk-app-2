import React from 'react';
import './Main.css';
import { Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import AboutImage from '../images/About.png';
import Nav from '../components/Nav';

const AboutPage = () => <Image src={AboutImage} as='a' as={Link} to='/about' />;

export default AboutPage;
