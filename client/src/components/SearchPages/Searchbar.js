import React, { useEffect, useRef, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import { useDispatch } from 'react-redux';
import { getSearchResult } from '../../features/search/searchSlice';
// import { getSearchResult } from '../../features/search/searchSlice';
const useStyles = makeStyles((theme) => ({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: '95%',
      borderRadius: '20px', 
      background: '#753fdc',
      color: 'whtie',
      position:'absolute',
      top: '80px',
      left: '0',
      right:'0',
      zIndex: '1500',
      margin:'10px auto',     
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
      color: 'white',
      zIndex: '2',
     
    
    },
    iconButton: {
      padding: 10,
      color: 'white',
      zIndex: '2',
    },
  }));
const Searchbar = ({value, setValue}) => {
  const searchValue = useRef("")
  const classes = useStyles();
  const dispatch = useDispatch()
  // const [value, setValue] = useState("a")
  useEffect(() => {

      searchValue.current.focus()
  }, [])
    const handleChange = () => {
   setValue(searchValue.current.value)
    dispatch(getSearchResult(value))
  }
    const handleSubmit = e => {
      e.preventDefault()
      
    }

    return (
        <Paper component="form" className={classes.root} onSubmit={handleSubmit}>
        <InputBase
          className={classes.input}
          type="text"
          placeholder="Search Music..."
          inputRef={searchValue}
          onChange={handleChange}
         
          
        />
        <IconButton type="submit" className={classes.iconButton} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    )
}

export default Searchbar
