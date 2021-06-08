import React from 'react'
// import testImg from '../../images/5.jpg'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { getCurrentPlayTrack } from '../../features/tracks/tracksSlice'
const SongItem = ({item, title}) => {
  // console.log(item)
    const dispatch = useDispatch()
    const handlePlay = () => {
       dispatch(getCurrentPlayTrack(item.uri))
    }
    return (
          
            <Song onClick={handlePlay}>
                <SongImgContainer>
                  <BackgroundHover></BackgroundHover>
                  <div className="img-cover">
                   <img 
                   src={ 
                     title === 'Top Tracks' ? 
                     item.album.images[0].url : 
                    
                     item.images[0].url 
                     
                    }
                     alt=""
                    />
                  </div>
                   <h3>{title === 'Top Tracks' ? item.name : item.name}</h3>
                   
                     { title === 'Top Tracks' && <p>
                     {item.artists.map(artist => artist.name).join(" & ")} </p>
                    
                    }
                  
                </SongImgContainer>
            </Song>
          
    )
}

export default SongItem



export const Song = styled.a`
  max-width: 100%;
  max-height: 100%;
  text-decoration: none;
  cursor: pointer;
  color: #495057;
  margin: 10px;
  padding: 10px;
  
  
`

export const SongImgContainer = styled.div`
  position: relative;
  transition: .4s all ease-in;
  max-width: 300px;
  

  img{
    object-fit: contain;
    width: 100%;
    height: 100%;
    border-radius: 1.4rem;
    max-height: 300px;

  }

  h3, p {
    margin: 0;
  }

  &:hover{
    div{
      &::after{
        content: "";
        opacity: 1;
      }
    }
  }
`

export const BackgroundHover = styled.div`

    position: absolute;
    max-width: 300px;
    top: 0;
    right: 0;
    left: 0;
    background: #333;
    &::after{
      content: "";
      border-radius: 1.4rem;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      height: 4rem;
      z-index: 1;
      background: rgba(0,0,0,.75);
      background: linear-gradient(to bottom,rgba(0,0,0,.75) 0,rgba(0,0,0,0) 100%);
      visibility: visible;
      opacity: 0;
      transition: .2s all ease-in;
    }
  
`