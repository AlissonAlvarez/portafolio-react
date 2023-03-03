import React, { useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  min-height: 100vh;
  height: auto;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
`
const Title = styled.h1`
  font-size: ${props => props.theme.fontxxxl};
  font-family:'Montserrat';
  font-weight: 300;
  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 10;
  color: ${props => props.theme.text};
`

const Left = styled.div`
  width: 35%;
  background-color: ${props => props.theme.title};
  color: ${props => props.theme.body};
  min-height: 100vh;
  z-index: 5;
  position: fixed;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  p{
    font-size: ${props => props.theme.fontlg};
    font-weight: 300;
    width: 80%;
    margin: 0 auto;
  }
`

const Right = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  left: 35%;
  padding-left: 30%;
  min-height: 100vh;
  background-color: ${props => props.theme.text};
  width: 65%;

  h1{
    width: 5rem;
    margin: 0 2rem;
  }
`


const Projects = () => {
  return (
    <Section>
      <Title data-scroll data-scroll-speed='-1' data-scroll-direction='horizontal'>Projects</Title>
      <Left>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, iusto itaque sint repellendus tenetur vel, maiores, atque modi officia hic libero similique ad nam iste porro animi quas fugit repudiandae.
        </p>
      </Left>
      <Right >
        <h1>img</h1>
        <h1>img</h1>
        <h1>img</h1>
        <h1>img</h1>
        <h1>img</h1>
        <h1>img</h1>
        <h1>img</h1>
        <h1>img</h1>

      </Right>
    </Section>
  )
}

export default Projects