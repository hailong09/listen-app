import React from 'react'
import { useSelector } from 'react-redux'
import { categoryName } from '../../features/search/searchSlice'
import {Container, Content} from '../MainPages/SongList'
import {CategoryContainer} from '../SearchPages/Categories'
import Playlist from './Playlist'
const CategoryPlaylists = ({playlists}) => {
    // console.log(playlists)
    const title = useSelector(categoryName)
    return (
        <Container>
            <Content>
                <h1>{title}</h1>
            </Content>
            <CategoryContainer>
                {playlists.map(playlist => (
                    <Playlist key={playlist.id} playlist={playlist}/>
                ))}
            </CategoryContainer>
        </Container>
    )
}

export default CategoryPlaylists
