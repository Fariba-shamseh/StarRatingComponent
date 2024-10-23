import StarRating from "./StarRating.jsx";
import {useState} from "react";


export default function Test(){
    const [movieRating,setMovieRating]=useState(0);
    return(
        <>
            <StarRating maxRating={10} color="blue" onSetRating={setMovieRating} />
            <p>This movie was rated {movieRating} stars</p>
        </>
    )
}
