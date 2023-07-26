import React from "react";
import { useParams } from "react-router-dom";
import { useRouteMatch } from "react-router-dom/cjs/react-router-dom.min";

function MovieShow({movies}){

    const params =useParams()
    const newer =useRouteMatch()
    console.log(params,newer)


    return (
        <div>
          <h3>{movies[params.movieId].title}</h3>
        </div>
      );
}

export default MovieShow;