import React from 'react'
import '../styles/NavBar.css';
import { NavLink } from 'react-router-dom';

import logohome from '../../src/assets/logos/logohome.png';
import logobat1 from '../../src/assets/logos/logo_bat_flèche.png';
import logobat2 from '../../src/assets/logos/logo_bat_flèche_2.png';
import iconfb from '../../src/assets/logos/icon_facebook.png';
import iconoig from '../../src/assets/logos/icon_ig.png';
import iconotw from '../../src/assets/logos/icon_tw.png';

const NavBar = () => {
    return (
        <header>
            <nav class="container" id="navigateur">
                <a href="">
                    <NavLink to="/"><img class="logo" src={logohome} alt="logo" /> </NavLink>
                </a>
                <ul>
                    <li className='nav-item'>
                        <NavLink to='/'>HOME</NavLink></li>
                    <li className='nav-item'>
                        <NavLink to='/account'>GAME</NavLink></li>
                    <li className='nav-item'>
                        <NavLink to="/eshop">ESHOP</NavLink></li>
                    <li className='nav-item'>
                        <NavLink to="/login">MON COMPTE</NavLink></li>
                </ul>
            </nav>
            <aside>
                <div class="scroll">

                    <a href="#"><img src={logobat1} alt="" /></a>

                    <img src={iconfb} alt="" class="social" />

                    <img src={iconoig} alt="" class="social" />

                    <img src={iconotw} alt="" class="social" /> <br /><br />

                    <a href="#"><img src={logobat2} alt="" class="bat_flèche_2" /></a>

                </div>
            </aside>
            <div className='left'> </div>
            <div className='horizontal'> </div>
            <div className='right'> </div>

        </header>
    )
}

export default NavBar