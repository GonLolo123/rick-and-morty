import styled from "./searchBar.module.css";
import React from "react";
import character from "../../data"
import Card from "../card/Card";

export default function SearchBar(props) {
   const {onSearch} = props
   
   const [id,setId] = React.useState({
      buscar:""
   })

   const handleChange = (event)=>{
      setId({
         ...id,
         buscar: event.target.value
      })
   }

   console.log(id)


   return (
      <div className={styled.searchContainer}>
         <input className={styled.searchInput} type='search' value={id.buscar} onChange={handleChange}/>

         <div className={styled.searchIconContainer}>
         <button className={styled.searchIcon} onClick={()=>onSearch(id.buscar)}></button>
         </div>
      </div>
         
   );
}
