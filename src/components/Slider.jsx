import React from 'react'
import styled from 'styled-components'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const SliderContainer = styled.div`
width:100%;
height:100vh;
background:url("https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png") center;
display:flex;
justify-content:center;
align-items:center;
`

const Arrow = styled.div`
background:teal;
border-radius:50%;
padding: 10px;
cursor: pointer;

`

function Slider() {
    return (
        <>
            <SliderContainer>               
                <Arrow>
                    <ArrowBackIosIcon></ArrowBackIosIcon>
                </Arrow>
                <Arrow>
                    <ArrowForwardIosIcon></ArrowForwardIosIcon>
                </Arrow>
            </SliderContainer>
        </>
    )
}

export default Slider