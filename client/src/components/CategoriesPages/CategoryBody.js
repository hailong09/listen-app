import React, { useEffect } from 'react'
import {useParams } from 'react-router'
import { Profile } from '../MainPages/Body'
import { spotify } from '../../apis/spotify'
import Player from '../MainPages/Player'
import CssBaseline from '@material-ui/core/CssBaseline';
import {useStyles, TopchartBG, SongListContainer} from '../MainPages/Body'
import { useDispatch, useSelector } from 'react-redux'
import {tokenSelector, userSelector } from '../../features/user/userSlice'
import  categorybg from '../../images/categorybg.jpg'
import Appbar from '../MainPages/Appbar'
import CategoryPlaylists from './CategoryPlaylists'
import { categoryTrackSelector, getCategoryTracks } from '../../features/tracks/tracksSlice'
const CategoryBody = () => {
    const classes = useStyles()
    const {id} = useParams()
    const dispatch = useDispatch()
    const token = useSelector(tokenSelector)
    const user = useSelector(userSelector)
    const categoryPlaylists = useSelector(categoryTrackSelector)
    useEffect(() => {
        spotify.getCategoryPlaylists(id).then(playlist => {
            dispatch(getCategoryTracks(playlist.playlists.items))
        })

       
    }, [id, dispatch])
    return (
        <div className={classes.root}>
            <CssBaseline />
            <Appbar/>
            <main className={classes.content}>
            <TopchartBG bg={categorybg}></TopchartBG>
            {user && 
              <Profile>
                <img src={user.images[0].url} alt="" width="40" height="40"/>
                <p>{user.display_name}</p>
              </Profile>
            }
            <SongListContainer>
                <CategoryPlaylists playlists ={categoryPlaylists}/>
            </SongListContainer>
            <Player token={token} searchPlayer={true}/>
            
            </main>
         
        </div>
    )
}

export default CategoryBody
