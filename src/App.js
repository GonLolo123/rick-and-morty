import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import NavBar from './components/navBar/NavBar';
import Cards from './components/cards/Cards.jsx';
import Forms from './components/forms/forms';
import Detail from './components/details/Detail';
import About from './components/About/About';
import Favorite from './components/favorites/favorite';

import {Routes,Route} from 'react-router-dom'

import { useLocation, useNavigate } from 'react-router-dom';



function App() {

   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = 'ejemplo@gmail.com';
   const PASSWORD = 'unaPassword123';

   
   const [characters, setCharacters] = React.useState([])
   const location = useLocation()
   
   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }

   function logout() {
      
         setAccess(false);
         navigate('/');
      
   }

   useEffect(()=>{
      !access && navigate('/');
   },[access])

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
         let exist = characters.find((ch)=>ch.id===data.id)
            if(exist)
            {
               alert("Ya existe")
            }else
            {
               setCharacters((oldChars) => [...oldChars, data]);
            }
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   function onClose(id){
      setCharacters((oldChars)=> {
         return oldChars.filter((ch)=>ch.id !== id)
      })
   }


   return (

      <div className='App'>
         {
            location.pathname === "/" ? null : 
            <NavBar onSearch={onSearch}  logout={logout}/>
         }
         <Routes>
            <Route path="/" element={<Forms login={login} />}></Route>
            <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/detail/:id" element={<Detail/>}></Route>
            <Route path='/favorites' element={<Favorite onClose={onClose}/>}></Route>

         </Routes>
         
         
      </div>
   );
}

export default App;
