import React from 'react'
import styled from 'styled-components'
import { loginUrl } from '../../apis/spotify'
import BrandLogo from '../../images/logo.svg'

const Header = () => {
    
    return (
        <Container>
           <Navbar>
               <a href={'/'}><img src={BrandLogo} alt="logo"/></a>
                <ul>
                    <SignIn>
                        <a href={loginUrl}>Sign in</a>
                    </SignIn>
                </ul>
           </Navbar>
        </Container>
    )
}


export default Header

const Container = styled.header`
    
    position: absolute;
    top: 0;
    right:0;
    left:0;
    overflow: hidden;
    z-index:2;

`

const Navbar = styled.nav`
    width: 100%;
    height: 100%;
    padding: 20px 40px;
    
    margin-right: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    ul{
        list-style-type: none;
        display: flex;

    }
`

const SignIn = styled.li`
    a{
        text-decoration:none;
        color: #333;
        box-shadow: 0 2px 6px 2px rgb(241 23 23 / 35%);
        cursor: pointer;
        border-radius: 4rem;
        line-height: 1.5;
        color: #fff;
        background-color: #f11717;
        border-color: #f11717;
        padding: .325rem 1rem;
        font-size: .765625rem;
        text-align: center;
        border: 1px solid transparent;

        &:hover{
            background-color: #d50d0d;
            border-color: #c90c0c;
        }
    }

`
