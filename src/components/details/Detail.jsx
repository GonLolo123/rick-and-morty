import React from "react";
import styled from './detail.module.css'
import { useParams } from "react-router-dom";
import axios from 'axios'

export default function Detail(){
    const {id} = useParams()
    const [character,setCharacter] = React.useState({})

    React.useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);


    return(
        <div className={styled.divConteiner}>
            
            <div className={styled.conteinerDatos}>


        
            <h1 className={styled.name}>{character.name}</h1>
            <h2 className={styled.datos}>NAME | {character.name}</h2>
            <h2 className={styled.datos}>STATUS | {character.status}</h2>
            <h2 className={styled.datos}>SPECIE | {character.species}</h2>
            {/* <h2>{character.gender}</h2> */}
            <h2 className={styled.datos}>ORGIN | {character.origin?.name}</h2>
            </div>

            <div className={styled.conteinerImage}>
            <img className={styled.imagen} src={character.image} alt={character.name} />

            </div>
        
        </div>
    )
}