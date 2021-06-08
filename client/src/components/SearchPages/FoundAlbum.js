import React from 'react'
import styled from 'styled-components'
import SongItem from '../MainPages/SongItem'
import {Container, Content} from '../MainPages/SongList'
import {CategoryContainer} from '../SearchPages/Categories'
const FoundAlbum = ({title, albums}) => {
    return (
        <Container>
            <Content>
                <div>
                    <h1>{title}</h1>
                </div>
            </Content>
           <AlbumContainer>
               {albums.map(song => (
                   <SongItem item={song} key={song.id}/>
               ))}
           </AlbumContainer>
        </Container>
    )
}

export default FoundAlbum

const AlbumContainer = styled(CategoryContainer)``