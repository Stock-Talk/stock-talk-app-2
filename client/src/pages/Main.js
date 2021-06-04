import React from 'react';
import './Main.css'
import Mainpage from '../images/Mainpage.png'
// import { Image } from 'semantic-ui-react'
import { Image, Reveal } from 'semantic-ui-react'
import About from '../images/fixedabout.png'


// const Main = () => (
//     <Image
//         src={Mainpage}
//         as='a'
//         size='extra-large'
//         href='/login'
//         target='_blank'
//     />
// )

const Main = () => (
    <Reveal animated='small fade'>
        <Reveal.Content visible>
            <Image circular size='extra-large' src={Mainpage} />
        </Reveal.Content>
        <Reveal.Content hidden>
            <Image circular size='extra-large' src={About} />
        </Reveal.Content>
    </Reveal>
)


export default Main;