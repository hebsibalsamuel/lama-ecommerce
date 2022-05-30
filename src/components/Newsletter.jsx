import React from 'react'
import styled from 'styled-components'
import SendIcon from '@mui/icons-material/Send';

const Container = styled.div`
width:100%;
height:40vh;
background-color:beige;
display:flex;
align-items: center;
justify-content: center;
flex-direction:column;
`
const Heading = styled.h3`
    font-size: 50px;
    margin-bottom: 10px;

`
const Description = styled.p`
    font-size: 23px;
    margin-bottom: 20px;
    color: gray;
    `
const Controls = styled.div`
    display: flex;
    width: 40%;
    `
const Input = styled.input`
flex: 8;
border:none;
padding: 10px;
`
const Button = styled.button`
flex: 1;
background: teal;
color: white;
border: none;`




    

const Newsletter = () => {
  return (
    <>
    <Container>
        <Heading>NEWSLETTER</Heading>
        <Description>Get timely updates for your favourite products</Description>
        <Controls>
            <Input placeholder='Your email'></Input>
            <Button><SendIcon></SendIcon></Button>
        </Controls>
    </Container>
    </>
  )
}

export default Newsletter