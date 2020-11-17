import React ,{useEffect , useState} from 'react';
import Movie from './components/Movie';

const FEATURE_API ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const SEARCH_API= "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


export default function App() {
  const [movies,setMovies] = useState([]);
  const [searchTerm , setSearchTerm] = useState('');


  useEffect(  ()=>{
    fetch(FEATURE_API).then((res)=> res.json()).then((data) =>{
      setMovies(data.results);
    })
  },[]);

  const handleSubmit =(e)=>{
      if(searchTerm)
      {
        e.preventDefault();
        fetch(SEARCH_API+searchTerm).then((res)=> res.json()).then((data) =>{
          setMovies(data.results);
        })
      //  setSearchTerm("");
      }
  }

  const handleChange= (e)=>{
      setSearchTerm(e.target.value);
  }
  return (
      <>
      <header>
        <form onSubmit={handleSubmit}>
          <input  value={searchTerm} onChange={handleChange} className="search" type="text" placeholder="Search ..."/>
        </form>
      </header>

      <div className="Null"></div>
      <div className="movie-container">

      { movies.length>0? movies.map((movie)=> 
      <Movie key={movie.id} {...movie}/>
      
      )  : "No Movies Matches!"}
    </div>
    </>
  )
}
