 import React ,{ useEffect }  from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles} from '@material-ui/core/styles';
import Appbar from './Appbar';
import styled from 'styled-components'
import Topchartbg from '../../images/home.jpg'
import SongList from './SongList';
import {
  userSelector, 
  isLoadingSelector, 
  getUserFailed,
  getUserSuccess,
  getToken,
 } from '../../features/user/userSlice'

 import {
   getTopArtists,
   topTrackSelector,
   topArtistSelector,
   getToptracks,

  } from '../../features/tracks/tracksSlice'
import { useDispatch, useSelector } from 'react-redux'
import {spotify} from '../../apis/spotify'


import useAuth from '../../Auth/useAuth';
import Player from './Player';
export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    overflowX:'hidden',
    position: 'relative',
  },
  content: {
    flexGrow: 1,
    width: '100%',
    height: '100vh',
    padding:  theme.spacing(0),
    minHeight: 'calc(100vh /3.26)',
    position: 'relative', 
  },
}));


const Body = ({code}) => {
    const classes = useStyles();
    
    const dispatch = useDispatch()
    const isLoading = useSelector(isLoadingSelector)
    const user = useSelector(userSelector)
    const token = useAuth(code)
    const toptracks = useSelector(topTrackSelector)
    const topArtists = useSelector(topArtistSelector)
    
    useEffect( () => {
      if(!token) return
      spotify.setAccessToken(token)
      dispatch(getToken(token))
      
      if(isLoading){
         
          spotify.getMe().then(user =>{
               dispatch(getUserSuccess(user))
          }).catch(
              dispatch(getUserFailed)
          )
          
          // @desc get top tracks 
          spotify.getMyTopTracks().then(topTracks => {
              
              dispatch(getToptracks(topTracks.items))
          })
          //@desc get top artist
          spotify.getMyTopArtists().then(topArtists => {
            dispatch(getTopArtists(topArtists.items))
          })
   
        }
       
    },[dispatch, isLoading, token])
   
  //  console.log(toptracks)
    return (
        <div  className={classes.root}>
            <CssBaseline />
            <Appbar user={user}/>
           
            <main className={classes.content}>
            <TopchartBG bg={Topchartbg}>
            </TopchartBG>

            {user && 
              <Profile>
                <img src={user.images[0].url} alt="" width="40" height="40"/>
                <p>{user.display_name}</p>
              </Profile>
            }
            <SongListContainer>
              <SongList title={'Top Tracks'} items = {toptracks}/>
              <SongList title={'Top Artist'} items={topArtists} />
              
            </SongListContainer>         
            
            <Player token={token} searchPlayer={false}/>
            
            </main>
           
    </div>
    )
}

export default Body

export const TopchartBG = styled.div`
  background-image: ${props=> `url(${props.bg})`};
  background-size: cover;
  background-position: center center;
  height: 20rem;
  margin: 0 0rem;
  padding-top: 20px;
  position: relative;
  z-index: 1;
 

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(255,255,255,.3);
   

  }

  &::after{
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 10rem;
    background: linear-gradient(to bottom,rgba(255,255,255,0) 0,#fff 78%,#fff 100%);
  }
  

`

export const SongListContainer = styled.div`
 
  margin-top: -6rem;

`


export  const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  position: absolute;
  top:0;
  z-index: 2;
  margin-left: 20px;
  img{
    border-radius: 50%;
  }
  p{
    margin-left: 10px;
    color: #fff;
    
  }
`