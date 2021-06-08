import React from 'react'
import styled from 'styled-components'
import {Container, Content} from '../MainPages/SongList'
import CategoryItem from './CategoryItem'
const Categories = ({categories}) => {

    return (
        <Container>
            <Content>
                <div>
                    <h1>Categories</h1>
                </div>
            </Content>
            <CategoryContainer>
                {categories.map(category => (
                    <CategoryItem key={category.id} category={category}/>
                ))}
            </CategoryContainer>
        </Container>
    )
}

export default Categories

export const CategoryContainer = styled.div`
    max-width: 100%;
    max-height: 100%;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    @media (max-width: 900px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));

    }
    @media (max-width: 650px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));

    }

    @media (max-width: 500px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));

    }


`