import React from 'react'
import styled from 'styled-components'
import img1 from '../assets/images/about.jpg'

const Section = styled.section`
  position: relative; 
  min-height: 100vh;
  width: 80vw;
  overflow: hidden;
  display: flex;
  margin: 0 auto;
`

const Title = styled.h1`
  font-size: ${props => props.theme.fontBig};
  font-family:'Montserrat';
  font-weight: 300;
  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 5;
  color: ${props => props.theme.title};
`

const Left = styled.div`  
  width: 50%;
  font-size: ${props => props.theme.fontlg};
  font-weight: 300;
  color: ${props => props.theme.text};
  position: relative;
  z-index: 5;
  margin-top: 20%;
`
const Right = styled.div`
  width: 50%;
`

function About() {
    return (
        <Section id='fixed-target'>
                <Title data-scroll data-scroll-speed='-2' data-scroll-direction='horizontal'>About</Title>
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
