import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  position: relative; 
  min-height: 200vh;
   
  overflow: hidden;
`

const Title = styled.h1`
font-size: ${props=>props.theme.fontBig};
font-family:'Montserrat';
font-weight: 300;
position: absolute;
top: 1rem;
left: 5%;
z-index: 5;
color: aqua;

`

function About() {
    return (
        <section>
            <Title></Title>
        </section>
    )
}

export default About;
