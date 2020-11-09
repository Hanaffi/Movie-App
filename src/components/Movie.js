import React from 'react'
const IMG_API = "https://image.tmdb.org/t/p/w1280";
const setVoteClass= (vote)=>{
    if(vote>7)
        return "green";
    else if(vote>5)
        return "yellow";
    else    
        return "red";
}
export default function Movie({title ,poster_path , overview, vote_average}) {
    return (
        <div className ="movie">
            <img className="img_to_blur" src={poster_path? IMG_API +poster_path :'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg' } alt={title} />
            <div className="movie-info">
                <h3>{title}</h3>
                <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
            </div>

            <div className="movie-over">
                <h2>Overview</h2>
                <p>{overview===""?" -- No Info -- " : overview}</p>
            </div>


        </div>
    )
}
