import React from 'react';
import './Main.css'
import Aboutpng from '../images/About.png'
import { Image } from 'semantic-ui-react'

const Main = () => (
  <Image
    src={Aboutpng}
    as='a'
    size='extra-large'
    href='/login'
    target='_blank'
  />
)


export default Main;