import React from 'react';
import './Main.css';
import MainNav from '../components/MainNav';
import MainImage from '../images/Mainpage.png';
import { Link } from 'react-router-dom';
import { Image, Reveal } from 'semantic-ui-react';
import RevealImage from '../images/fixedabout.png';

// const Main = () => <Image src={Aboutpng} as={Link} to='/about' />;

const Main = () => (
  <div>
    <MainNav />
    <Reveal animated='small fade'>
      <Reveal.Content visible>
        <Image src={MainImage} circular size='extra-large' />
      </Reveal.Content>
      <Reveal.Content hidden>
        <Image
          src={RevealImage}
          circular
          size='extra-large'
          as={Link}
          to='/about'
        />
      </Reveal.Content>
    </Reveal>
  </div>
);

export default Main;
