import React from 'react'
import styled from 'styled-components'
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Section = styled.section`
    display: flex;
    justify-content: center;
    background-color:${props => props.theme.textPrimary};
`

const Logos = styled.div`
    margin: ${props => props.theme.fontxs};
    font-size:${props => props.theme.fontll};
    color:${props => props.theme.title};    
`
function Footer() {
    return (
        <Section>
            <Logos>
                <FaGithub  />
            </Logos>
            <Logos>
                <FaLinkedinIn />
            </Logos>
            <Logos>
                <AiFillInstagram />
            </Logos>
        </Section>
    )
}

export default Footer