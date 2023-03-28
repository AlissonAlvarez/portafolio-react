import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components'

const Section = styled.section`
  width: 100%;
  min-height: 90vh;
  position: relative; 
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  background-color: ${props => props.theme.textPrimary};
`

const Title = styled.h1`
  margin-top: 1rem;
  font-weight: 300;
  font-size: ${props => props.theme.fontxl};
  color: ${props => props.theme.title};
`

const ContainerForm = styled.div`
  width: 60%;
  height: 60vh;
  margin-bottom: 2rem;
  margin-top: 2rem;
  border-radius: 2%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.body};
`

const Form = styled.form`
  padding-right: 1rem;

  input, textarea {
    width: 100%;
    margin: ${props => props.theme.fontxx};
    padding: 0.5rem;
    border-radius: 5px;
  }

  input, textarea {
    margin-top: ${props => props.theme.fontxs};
  }
  
  textarea {
    height:20vh;
  }

  input[type="submit"]{
    font-weight: 700;
    font-size: ${props => props.theme.fontxs};
    color: ${props => props.theme.textPrimary};
    background-color: ${props => props.theme.title};
    cursor:pointer;
  }

  input::placeholder, textarea::placeholder {
    margin: ${props => props.theme.fontss};
    font-size: ${props => props.theme.fontxs};
    color: ${props => props.theme.body};
    text-align: left;
`

function Contact() {

  const useRefForm = useRef();

  const sendEmail = (event) => {
    event.preventDefault();
    const serviceId = "service_zy36pfj";
    const templateId = "template_i47syyd";
    const apiKey = "27EE_nYEvD3cFgeNA";
    emailjs.sendForm(
      serviceId,
      templateId,
      useRefForm.current, 
      apiKey)
      .then((result) => {
        console.log(result.text);
        console.log("Mensaje enviado correctamente");
      }, (error) => {
        console.log(error.text);
        console.log("No se envio el mensaje");
      });
  };

  return (
    <Section>
      <Title data-scroll data-scroll-speed='-2' data-scroll-direction='horizontal'>
        Contacto
      </Title>
      <ContainerForm>
        <Form ref={useRefForm} onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder="Nombre" required />
          <input type="email" name="user_email" placeholder="Correo" required />
          <textarea name="message" placeholder="Mensaje" required />
          <input type="submit" value="Enviar" />
        </Form>
      </ContainerForm>
    </Section>
  )
}

export default Contact;