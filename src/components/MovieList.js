import React from 'react'



const MovieList = (props) => {
    // const Movies = [
    //     "The Shawshank Redemption",
    //     "Pulp Fiction",
    //     "The Good the Bad the Ugly",
    //     "The Exorcist"
    // ]

    // const MoviesWithKeys = [
    //     {id: 1, name: "The Shawshank Redemption"},
    //     {id: 2, name: "Fiction"},
    //     {id: 3, name: "The Good the Bad the Ugly"},
    //     {id: 4, name: "The Exorcist"}
    // ]

    // const movieList = Movies.map((movie, index) => {
    //     return <li key={index}>{movie}</li>
    // })

    const movieList = props.movies.map((movie)=>{
        return <li key={movie.id} onClick={props.click}>{movie.name}</li>
    })

    React.useEffect(() => {
        console.log("MovieList.js closed");
        return (()=>{console.log("Movie list is unmounted")})
      }, []);

    return (
        <div>
            <h1 >
                Movie List
            </h1>
            <h3>
                {props.name}
            </h3>
            <ul >{movieList}</ul>
        </div>
    )
}

export default MovieList
