import React from 'react'
import styled from 'styled-components'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const Container = styled.div`
display:flex;
background-color:aliceblue;
min-height:30vh;
max-height:40vh;
width:100%;
margin-top:10px;
`
const Left = styled.div`
flex:1;
display:flex;
flex-direction:column;
padding: 10px;
`
const Brand = styled.h2`
margin-bottom: 7px;
font-size: 32px;
`
const Description = styled.p`
text-align: justify;
`
const Icons = styled.div`
display:flex;
margin-top: 10px;
cursor:pointer;
`
const Center = styled.div`
flex:1;
`
const Right = styled.div`
flex:1;
`
const LinksTitle = styled.h2`

`
const Links = styled.ul`
    list-style: none;
    padding: 0px;
    margin: 10px;
`
const Link = styled.li`
padding: 10px;
`


const Footer = () => {
    return (
        <Container>
            <Left>
                <Brand>DROL</Brand>
                <Description>There are many variations of passages of Lorem Ipsum available, but
                    the majority have suffered alteration in some form, by injected
                    humour, or randomised words which don’t look even slightly believable.
                    There are many variations of passages of Lorem Ipsum available, but
                    the majority have suffered alteration in some form, by injected
                    humour, or randomised words which don’t look even slightly believable.</Description>
                <Icons>
                    <InstagramIcon style={{ color: "E4405F", fontSize: '35px', marginRight: '8px' }}></InstagramIcon>
                    <FacebookIcon style={{ color: "3B5999", fontSize: '35px', marginRight: '8px' }}></FacebookIcon>
                    <TwitterIcon style={{ color: "55ACEE", fontSize: '35px', marginRight: '8px' }}></TwitterIcon>
                </Icons>
            </Left>
            <Center>
                <LinksTitle>Useful Links</LinksTitle>
                <Links>
                    <Link>Home</Link>
                    <Link>Men Fashion</Link>
                    <Link>Women Fashion</Link>
                    <Link>Accessories</Link>
                    <Link>Order Tracking</Link>
                    <Link>Wishlist</Link>
                    <Link>Terms</Link>
                    <Link>Cart</Link>
                </Links>
            </Center>
            <Right></Right>
        </Container>
    )
}

export default Footer