import React from 'react'
import logo from '../../assets/github.png'

import { HeaderContainer } from "./styles";

const refresh = () => window.location.reload();


function Header () {
    return(
    <HeaderContainer>
        <img src={logo} alt='Github Logo' className='header__logo' onClick={refresh}/>
        <h1 onClick={refresh}>Github Wiki</h1>
    </HeaderContainer>
)
}

export default Header
