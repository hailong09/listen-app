import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import SpotifyPlayer from "react-spotify-web-playback"
import { useSelector } from 'react-redux'
import { currentPlayTrack } from '../../features/tracks/tracksSlice'


const Player = ({token, searchPlayer}) => {
    const currentplaysong = useSelector(currentPlayTrack)
    const [play, setPlay] = useState(false)
    useEffect(() => setPlay(true), [currentplaysong])
   
    if(!token) return null
    return (
        <Container searchPlayer ={searchPlayer}>
     
           <SpotifyPlayer
                token={token}
                uris={currentplaysong ? [currentplaysong]: []}
                styles={{
                    activeColor: 'green',
                    bgColor: '#282828',
                    color: 'green',
                    loaderColor: 'green',
                    sliderColor: 'green',
                    trackArtistColor: '#fff',
                    trackNameColor: '#fff',
                    
                  }}
                  callback={state => {
                    if (!state.isPlaying) setPlay(false)
                  }}
                  play={play}
            />
       
         </Container>
    )
}

export default Player

const Container = styled.div`
    position: sticky;
    width: ${props => props.searchPlayer ? "100%" : "95.25%"};
    max-width: 100vw;
    height: 80px;
    left: 0px;
    bottom: 0px;
    z-index: 3;
    /* overflow-x: hidden; */
    .searchPlayer{
        width: 100%;
    }
   
   .PlayerRSWP{
       max-width: 100%;
      height: 100%;
   }
   ._ContentRSWP ,.__1xc0f9k{
       margin-top: 15px;
   }
    
    
`

