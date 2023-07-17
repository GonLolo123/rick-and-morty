import React from "react";
import Card from "../card/Card";
import {  connect, useDispatch, useSelector } from "react-redux";
import styled from '../cards/cards.module.css'
import { Link } from "react-router-dom";
import { filterCards, orderCards, removeFav, reset } from "../../Redux/actions/actions";

export default function Favorite({onClose}){
    const {myFavorites} = useSelector((state)=>state)
    const dispatch = useDispatch()

    function closeFavorite(id){
        onClose(id)
        dispatch(removeFav(id))
    }

    function handleOrder(event){
        event.preventDefault()
        const {name,value} = event.target
        dispatch(orderCards(value))
    }

    function handleFilter(event){
        event.preventDefault()
        const {value} = event.target
        dispatch(filterCards(value))
    }

    function handleReset(){
        dispatch(reset())
    }

    return(
        
        <div className={styled.cardList}>

            <select onChange={handleOrder} name='order' defaultValue={"DEFAULT"}>
            <option value='DEFAULT' disable>Select Order</option>    
            <option value='Ascendente'>Ascendente</option>
            <option value='Descendente'>Descendente</option>
            </select>

            <select onChange={handleFilter} name='filter' defaultValue={"DEFAULT"}>
            <option value='DEFAULT' disable>Select Filter</option>    
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
            <option value='Genderless'>Genderless</option>
            <option value='unknow'>unknow</option>
            
            </select>

            <button onClick={handleReset}>RESET</button>

            {
                myFavorites && 
                myFavorites.map((character)=>
                <Card 
                key={character.id} 
                character={character} 
                onClose={()=>closeFavorite(character.id)}></Card>)
            }
        </div>
    )
}
// function mapState(st){
//     return{
//         myFavorites: st.myFavorites
//     }
// }

// function mapDispatch(d){
//     return{
//         removeFav:(id) => d(removeFav(id))
//     }
// }

// export default connect(mapState,mapDispatch)(Favorite)
