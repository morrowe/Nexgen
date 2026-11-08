import styles from './header.module.scss'
import { NavLink } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react';
import {im} from '../images/images.js';
import axios from "axios";


function Header(){
    return(
     <>
        <header>
            <div className={styles.block}>
                <div className={styles.head}>
                    <div className={styles.logo}>
                        <img src={im.logo} />
                    </div>
                    <nav className={styles.nav}>
                        <NavLink to={"/page1"}  className={({ isActive }) => (isActive ? `${styles.active} ${styles.activee}` : "")}>Home</NavLink>
                        <NavLink to={"/page2"} className={({isActive}) => (isActive ? `${styles.active} ${styles.active}`: "")}>Services</NavLink>
                        <NavLink to={'/page3'} className={({isActive}) => (isActive ? "active":"")}>Pojects</NavLink>
                        <NavLink to={'/page4'} className={({isActive}) => (isActive ? "active":"")}>About</NavLink>
                        <NavLink to={'/page5'} className={({isActive}) => (isActive ? "active":"")}>Careers</NavLink>
                        <NavLink to={'/page6'} className={({isActive}) => (isActive ? "active":"")}>Blogs</NavLink>
                        <NavLink to={'/page8'} className={({isActive}) => (isActive ? "active":"")}><button className={styles.btnNav}>Contact Us</button></NavLink>
                    </nav> 
                </div>
            </div>
        </header>
     </>
    )
}

export default Header