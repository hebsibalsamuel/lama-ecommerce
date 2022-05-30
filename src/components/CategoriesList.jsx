import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
height:70vh;
flex:1;
margin:3px;
position:relative;
`
const Image = styled.img`
width:100%;
height:100%;
object-fit:cover;

`
const Info = styled.div`
position:absolute;
top:0;
left:0;
height:100%;
width:100%;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`
const Button = styled.button`
padding: 10px;
font-size: 17px;
border: none;
font-weight: 700;
cursor: pointer;
`
const Title = styled.h3`
color: white;
font-size: 50px;
text-align: center;
margin: 5px;
`


function CategoriesList({ category }) {
    return (
        <Container>
            <Image src={category.img}></Image>
            <Info>
                <Title>{category.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Container>
    )
}

export default CategoriesList