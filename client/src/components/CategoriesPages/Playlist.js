import React from 'react'
import { useDispatch } from 'react-redux'
import { getCurrentPlayTrack } from '../../features/tracks/tracksSlice'
import {Song, SongImgContainer, BackgroundHover} from '../MainPages/SongItem'
const Playlist = ({playlist}) => {
    
    const dispatch = useDispatch()
    const handlePlay = () => {
        dispatch(getCurrentPlayTrack(playlist.uri))
    }
    return (
        <Song onClick={handlePlay} >
        <SongImgContainer>
            <BackgroundHover></BackgroundHover>
            <div className="img-cover">
                <img src={playlist.images[0].url} alt=""/>
                <h3>
                   {playlist.name}
                </h3>
            </div>
        </SongImgContainer>
    </Song>
    )
}

export default Playlist
