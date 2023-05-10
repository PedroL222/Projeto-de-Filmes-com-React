import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import "./MovieGrid.css";
const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () =>{

    const [searchParams] = useSearchParams();

    const [movies, setMovies] = useState([]);
    const query = searchParams.get("q");

    const getSearchedMovies = async (url) =>{
        const res = await fetch(url);
        const data =await res.json();

        setMovies(data.results);
    }

    useEffect(()=>{

        const searchWithQueryURL = `${searchURL}?api_key=${apiKey}&query=${query}`;

        getSearchedMovies(searchWithQueryURL);
        console.log(searchWithQueryURL);
    },[query])

    return <>
        <div className="container">
            <h2 className="title">Resultados para: <span className="query_text">{query}</span></h2>
            <div className="movies_container">
                {movies.length === 0 &&<p>Carregando...</p>}
                {movies && movies.map((movie)=>
            (<MovieCard key={movie.id} movie={movie} />)
        )}
            </div>
        </div>
    </>
}

export default Search;