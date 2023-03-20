import React from 'react'
import styled from 'styled-components'
import img1 from '../assets/images/about.jpg'

const Section = styled.section`
  width: 80vw;
  min-height: 70vh;
  margin: 0 auto;  
  position: relative; 
  display: flex;
  overflow: hidden;  
`

const Title = styled.h1`
  margin-left: 5%;  
  margin-top: 1rem;
  z-index: 5;
  position: absolute;  
  font-family:'Montserrat';
  font-size: ${props => props.theme.fontxl};  
  font-weight: 300;    
  color: ${props => props.theme.title};
`

const Left = styled.div`  
  width: 50%;
  margin-top: 20%;
  z-index: 5;
  position: relative;  
  font-size: ${props => props.theme.fontss};
  font-weight: 300;
  color: ${props => props.theme.textPrimary};  
`

const Right = styled.div`
  width: 50%;
`

function About() {
  return (
    <Section id='fixed-target'>
      <Title data-scroll data-scroll-speed='-2' data-scroll-direction='horizontal'>Acerca de mi</Title>
      <Left data-scroll data-scroll-sticky data-scroll-target='#fixed-target'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit aliquam quaerat, incidunt alias, explicabo maiores similique sed odit laudantium, exercitationem harum! Placeat, laborum laboriosam repellat aspernatur deserunt delectus ipsam harum?
        <br />
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus officiis, illo laborum nesciunt quam porro blanditiis laudantium fugiat inventore architecto doloribus ipsum. Minima praesentium neque alias, consequuntur eveniet totam in?
      </Left>
      <Right><img src={img1} alt="About Us" /></Right>
    </Section>
  )
}

export default About;
