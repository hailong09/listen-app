import React from 'react'
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import styled from 'styled-components'
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import logo from '../../images/logo.svg'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { loginUrl } from '../../apis/spotify';
import { useHistory } from 'react-router';

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
   
    appBar: {
    zIndex: theme.zIndex.drawer + 1,
      boxShadow:'none',
      display: 'flex',
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
     
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: theme.spacing(0, 1),
  
      
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    
  }));
  
const Appbar = ({user}) => {
    const theme = useTheme();
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const history = useHistory()
    const handleDrawerOpen = () => {
        setOpen(true);
      };
    
      const handleDrawerClose = () => {
        setOpen(false);
      };
    const handlePush = path => {
        history.push(path)
    }
     
    return (
        <>
          <AppBar
            color= 'transparent'
            position="fixed"
            className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
        })}
      >
        
            <Toolbar>
                
                <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, {
                [classes.hide]: open,
                })}
              >
                  <MenuIcon />
              </IconButton>
             
              
            </Toolbar>
           
        </AppBar>
        <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
            })}
          classes={{
              paper: clsx({
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
              }),
            }}
        >
          

          <div className={classes.toolbar}>
            { open && 
            <>
             <a href={loginUrl}><img src={logo} alt="" width='80' height='80'/></a> 
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
              </IconButton>
            </>
            }
            
          </div>
       
          <List>
            <ListItem>
              <NavLink href={loginUrl}>
                <ListItemIcon>
                    <HomeOutlinedIcon/>
                </ListItemIcon>
                <ListItemText>Home</ListItemText>
              </NavLink>
              
            </ListItem>
            <ListItem onClick={handlePush.bind(this, "/search")} style={{cursor:"pointer"}}>
              <ListItemIcon>
                  <SearchOutlinedIcon/>
              </ListItemIcon>
              <ListItemText>Search</ListItemText>
            </ListItem>
          </List>

      </Drawer>
            
        </>
    )
}

export default Appbar

const NavLink = styled.a`
    display: flex;
    align-items: center;
    text-align: center;
    text-decoration: none;
    position: relative;
  
`
