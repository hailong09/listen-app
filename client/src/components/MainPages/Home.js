import React from 'react'
import { useLocation} from 'react-router';
import queryString from 'query-string'
import Body from './Body';
import LandingPage from '../landingPages/LandingPage';


const Home = () => {
    const {search} = useLocation()
    const {code} = queryString.parse(search)
    return (
        <>
            {code ?  <Body code={code}/> : <LandingPage />}
        </>
    )
}

export default Home
