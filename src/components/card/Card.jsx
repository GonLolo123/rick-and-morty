import styled from "./Card.module.css"
import {Link} from "react-router-dom"
import React from "react";
import { connect, useDispatch, useSelector} from "react-redux";
import { addFav, removeFav} from "../../Redux/actions/actions";

export default function Card(props) {
   const {character,onClose} = props;
   // console.log(props);
   const dispatch= useDispatch()

   const [isFav,setIsFav] = React.useState(false)

   const {myFavorites} = useSelector((s) => s)

   function handleFavorite(){
      if(isFav){
         setIsFav(false);
         dispatch(removeFav(character.id))
      }else{
         setIsFav(true);
         dispatch(addFav(character))
      }
   }

   React.useEffect(()=>{
      myFavorites.forEach(fav => {
         if(fav.id === character.id) {
            setIsFav(true)
         }
         
      });
   },[myFavorites])

   function superClose(){
      onClose(character.id)
      dispatch(removeFav(character.id))
   }
   
   return (

      <div className={styled.cardContainer} >

      


         <div className={styled.imageContainer}>
            
            <Link to={`/detail/${character.id}`} >
            <img className={styled.characterImage} src={character.image} alt={character.name} /> 
            <h2 className={styled.name}>{character.name}</h2> 
         
            </Link>

            {
               isFav ? (
                  <button className={styled.favButton} onClick={handleFavorite}>❤️</button>
               ) : (
                  <button className={styled.favButton}onClick={handleFavorite}>🤍</button>
               )
            }

            <button className={styled.closeButton} onClick={superClose}>X</button>
         </div>

         <div className={styled.atributes}>
            <h2>{character.species}</h2>
            <h2>{character.gender}</h2>
         </div>

      </div>
   );
}

// function mapStateToProp(state){
//    return{
//       myFavorites: state.myFavorites
//    }
// }

// function mapDispatchToProp(dispatch){
//    return{
//       addFav: (character) => dispatch(addFav(character)),
//       removeFav: (id) => dispatch(removeFav(id))
//    }
// }

// export default connect(mapStateToProp, mapDispatchToProp)(Card)