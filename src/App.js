import React from "react";
import logo from "./logo.svg";
import "./App.css";
import DisplayName from "./components/DisplayName";
import MovieList from "./components/MovieList";
import ClickCount from "./components/ClickCount";

function handleClick(e) {
  console.log(e.target.innerHTML);
}
function App() {
  const MoviesWithKeys = [
    { id: 1, name: "The Shawshank Redemption" },
    { id: 2, name: "Fiction" },
    { id: 3, name: "The Good the Bad the Ugly" },
    { id: 4, name: "The Exorcist" },
  ];

  React.useEffect(() => {
    console.log("App.js Mounted");
  }, []);

  const [switcher, setSwitcher] = React.useState(true);
  return (
    <div>
      <h1>App.js</h1>
      <button onClick={() => setSwitcher(!switcher)}>
        Switch: {switcher.toString()}
      </button>
      <br />
      {switcher ? (
        <ClickCount />
      ) : (
        <MovieList
          movies={MoviesWithKeys}
          name={"by Arpit Anand"}
          click={handleClick}
        />
      )}
    </div>
  );
}

export default App;

//Extras

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
