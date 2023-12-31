import React, { useState } from 'react';
import './App.css';

function App() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([])
  const submitHandler = e=>{
    e.preventDefault();
    //console.log(search);
    fetch(`http://localhost:8080/api/search/movie/${search}`).then(
      response => response.json()
    ).then(resVal => setData(resVal))
  }

  return (
    <div className='p-4'>
      <h1 className="p-4 mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Movie <mark className="px-4 text-white bg-blue-600 rounded dark:bg-blue-500">Hunt</mark></h1>
      <form onSubmit={submitHandler}>
        <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" ariaHidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input type="search" value={search} onChange={(e)=>setSearch(e.target.value)} id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Movies..." required/>
            <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
        </div>
      </form>

      {data.map(movie=>
        <div>
        <div className="rounded-lg bg-white shadow-lg p-4 m-4">
          <h1 className="mb-1 text-lg font-semibold">{movie.movieTitle}</h1>
          <p className="mb-2 text-sm text-gray-700">Release Date: {movie.movieReleaseDate}</p>
          <p className="mb-2 text-sm text-gray-700">Rating: {movie.movieRating}</p>
          <p className="mb-2 text-sm text-gray-700">Overview: {movie.movieOverview}</p>
      </div>
    </div>
      )}
    </div>
  );
}

export default App;
