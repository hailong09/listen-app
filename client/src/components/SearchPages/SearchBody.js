import React, { useEffect,useRef, useState} from 'react'
import Appbar from '../MainPages/Appbar'
import searchbg from '../../images/searchbg.jpg'
import { 
  getUserFailed, 
  getUserSuccess, 
  isLoadingSelector, 
  tokenSelector, 
  userSelector 
} from '../../features/user/userSlice'
import { 
  useDispatch, 
  useSelector 
} from 'react-redux'
import { Profile } from '../MainPages/Body'
import { spotify } from '../../apis/spotify'
import Player from '../MainPages/Player'
import CssBaseline from '@material-ui/core/CssBaseline';
import {useStyles, TopchartBG, SongListContainer} from '../MainPages/Body'
import Searchbar from './Searchbar'
import Categories from './Categories'
import { CategoriesSelector, getAfterSearch, getCategories, resultSelector, searchFound } from '../../features/search/searchSlice'
import LoadingIndicator from '../../LoadingIndicator'
import SongList from '../MainPages/SongList'
import FoundAlbum from './FoundAlbum'

const SearchBody = () => {
    const classes = useStyles()   
    const dispatch = useDispatch()
    const isLoading = useSelector(isLoadingSelector)
    const user = useSelector(userSelector)
    const categories = useSelector(CategoriesSelector)
    const token = useSelector(tokenSelector)
    const result = useSelector(resultSelector)
    const [value, setValue] = useState("a")
    useEffect(() => {     
        if(isLoading){
            spotify.getMe().then(user => {
                dispatch(getUserSuccess(user))
            }).catch(
                dispatch(getUserFailed)
            )
        }

        spotify.getCategories().then(category => {
       
          dispatch(getCategories(category.categories.items))
        })

      
        spotify.search(value, ['album'])
        .then(s => {
      
          dispatch(getAfterSearch(s.albums.items))
        })
       
        
    },[dispatch, isLoading,value])
    
console.log(value)
console.log(result)
    return (
        <div className={classes.root}>
            <CssBaseline />
            <Appbar user={user}/>
            <main className={classes.content}>
            <TopchartBG bg={searchbg}>
            </TopchartBG>
            {user && 
              <Profile>
                <img src={user.images[0].url} alt="" width="40" height="40"/>
                <p>{user.display_name}</p>
              </Profile>
            }
            <Searchbar value={value} setValue={setValue}/>
            <SongListContainer>
              {
                value === "a" || "" ? 
                <Categories categories={categories}/>
               
                :
                <>
                   <FoundAlbum title={"Albums"} albums={result}/>
                    

                
                 </>
                 
               }        
            </SongListContainer>
            
            <Player token={token} searchPlayer={true}/>
            
            </main>
         
        </div>
    )
}

export default SearchBody
