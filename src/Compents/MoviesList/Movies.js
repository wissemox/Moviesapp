import React from 'react'
import MoviesCard from '../MovieCard/MoviesCard'

function MoviesList({moviesList,searchByname,searchNajma}) {
return (
    <div className="ALLL">
    {moviesList
    .filter((el) => el.Name.toLowerCase().includes(searchByname.trim())&&el.rating>=searchNajma).map((el,i)=><MoviesCard key={i} el={el}/>)}
    </div>
    
);
}

export default MoviesList;
