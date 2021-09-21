import React from "react";

const MovieList = (props) => {
  const [name, setName] = React.useState('Eg. Arpit')
  const [enjoy, setEnjoy] = React.useState(true)
  const [fruit, setFruit] = React.useState("Apples")

  const movieList = props.movies.map((movie) => {
    return (
      <li key={movie.id} onClick={props.click}>
        {movie.name}
      </li>
    );
  });

  React.useEffect(() => {
    console.log("MovieList.js closed");
    return () => {
      console.log("Movie list is unmounted");
    };
  }, []);

  function handleSubmit(e){
    e.preventDefault();
    console.log("NAME: ", {name}, " Enjoying: ", {enjoy}, " Fruit: ", {fruit})
  }

  return (
    <div>
      {/* <h1>Movie List</h1>
      <h3>{props.name}</h3>
      <ul>{movieList}</ul> */}
      {/* //Creating a Form */}
      <form onSubmit={handleSubmit}>
      <h1>FORM</h1>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" value={name} onChange={(e)=> setName(e.target.value)}/>
        <br/><br/>
        <label htmlFor="checkbox">Are you enjoying</label>
        <input type="checkbox" id="myCheckBox" checked={enjoy} onChange={(e)=>{setEnjoy(e.target.checked)}}/>
        <br/><br/>
        <label htmlFor="fruit">Choose your favorite fruit!</label>
        <br/>
        <select id="favFruit" value="Apples" onClick={(e) =>{setFruit(e.target.value)}}>
          <option value="mango">Mango</option>
          <option value="banana">Banana</option>
          <option value="Apples">Apples</option>
        </select>
        <br/>
        <br/>
        <input type="submit" value="SUBMIT FORM"/>
      </form>
    </div>
  );
};

export default MovieList;




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