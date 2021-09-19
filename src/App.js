import React from "react";
import logo from "./logo.svg";
import "./App.css";
import DisplayName from "./components/DisplayName";
import MovieList from "./components/MovieList";

//This the same way of doing that
// class App extends React.Component {

//   render() { //The only method that needs to be here
//   const Hello = "Arpit ANAND"
//     return (<div>
//       <h1>Hii this is arpit</h1>
//       <h2>{3+5}</h2>
//       <h3>{Hello}</h3>
//     </div>)
//   }
// }
function handleClick(e){
  console.log(e.target.innerHTML)
}
//Use functional components over class based component as its easy though
function App() {

  //We can also create the JSON object here and then pass this as a prop to the function
  const MoviesWithKeys = [
    { id: 1, name: "The Shawshank Redemption" },
    { id: 2, name: "Fiction" },
    { id: 3, name: "The Good the Bad the Ugly" },
    { id: 4, name: "The Exorcist" },
  ];
  return (
    <div>
      <h1>Hello</h1>
      <DisplayName />
      <MovieList movies={MoviesWithKeys} name={"by Arpit Anand"} click= {handleClick}/>
    </div>
  );
}

export default App;
