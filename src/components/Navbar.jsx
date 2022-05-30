import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import { Badge, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Container = styled.div`
width:100%;
`

const Wrapper = styled.div`
padding: 10px 20px;
display:flex;
justify-content:space-between;
align-items:center;
`
const Left = styled.div`
display:flex;
flex:1;
`
const SearchContainer = styled.div`
border: 0.5px solid #808080b0;
padding: 5px;
display: flex;
justify-content: space-between;    
`
const Input = styled.input`
border:none;
`
const Center = styled.div`
flex:1;
`
const Logo = styled.h1`
text-align: center;
`
const Right = styled.div`
flex:1;
display: flex;
place-items: center;
justify-content: flex-end;
`
const LinkItems = styled.div`
margin-left: 10px;
cursor:pointer;
`


const Navbar = () => {
    return (
        <>
            <Container>
                <Wrapper>
                    <Left>
                        <SearchContainer>
                            <Input></Input>
                            <SearchIcon style={{color:'gray'}}></SearchIcon>
                        </SearchContainer>

                    </Left>
                    <Center>
                        <Logo> DROL </Logo>
                    </Center>
                    <Right>
                        <LinkItems>SIGN IN</LinkItems>
                        <LinkItems>REGISTER</LinkItems>
                        <LinkItems>
                            <IconButton aria-label="cart">
                                <Badge badgeContent={4} color="secondary">
                                    <ShoppingCartIcon />
                                </Badge>
                            </IconButton>
                        </LinkItems>
                    </Right>
                </Wrapper>
            </Container>
        </>
    )
}

export default Navbar