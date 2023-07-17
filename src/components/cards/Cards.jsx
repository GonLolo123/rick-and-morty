import Card from '../card/Card';
import styled from './cards.module.css'
import React from 'react';

export default function Cards(props){
   const {characters,onClose} = props
   
   return(
      <div className={styled.cardList}>

         {characters.map((character)=>(
            <Card key={character.id} character={character} onClose={onClose}/>
         ))} 
         

      </div>
   )
}
