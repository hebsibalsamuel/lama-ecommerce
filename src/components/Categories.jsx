import React from 'react'
import { categories } from '../mock/data'
import styled from 'styled-components'
import CategoriesList from './CategoriesList'

const Container = styled.div`
width:100%;
display: flex;
justify-content: space-between;
`

function Categories() {
    return (
        <>
            <Container>
                {
                    categories.map(category => {
                        return (
                            <CategoriesList key={category.id} category={category}></CategoriesList>
                        )
                    })
                }
            </Container>
        </>
    )
}

export default Categories

