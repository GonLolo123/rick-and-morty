import React from "react";
import SearchBar from "../searchBar/SearchBar";
import styled from "./navBar.module.css";

import {Link} from 'react-router-dom'


export default function NavBar({onSearch,logout}){
    return(
        
        <div className={styled.nav}>

            <div className={styled.conteinerButtons}>

            <Link to='/home'>
            <button className={styled.buton}>Home</button>
            </Link>
            
            <Link to='/about'>
            <button className={styled.buton}>About</button>
            </Link>

            <button className={styled.buton} onClick={logout}>LogOut</button>
            
            <Link to='/favorites'>

            <button className={styled.buton}>Favoritos</button>
            </Link>

            </div>

            <div className={styled.conteinerSearch}> 

            <SearchBar onSearch={onSearch}  />
            </div>
            
        </div>


    )
}