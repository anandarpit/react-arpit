import React from "react";
import "./App.css";
import DisplayName from "./components/DisplayName";
import MovieList from "./components/MovieList";
import ClickCount from "./components/ClickCount";

function handleClick(e) {
  console.log(e.target.innerHTML);
}

const TitleStyle = {backgroundColor: "maroon", color: "white"}

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

  const [switcher, setSwitcher] = React.useState(false);
  return (
    <div>
      <h1 style={TitleStyle}>App.js</h1>
      <p>Irure aliqua eu voluptate ex non. Pariatur quis aliqua voluptate labore eu pariatur. Commodo laborum esse ipsum sit fugiat amet ea reprehenderit do incididunt quis sit laborum ut. Ipsum id duis deserunt ut occaecat elit elit incididunt nulla irure nostrud sint laborum.</p>
      <p>In velit in adipisicing deserunt reprehenderit amet duis deserunt deserunt cupidatat aliquip ea. Velit duis id et occaecat. Eu occaecat in sint duis reprehenderit est dolore enim aliqua anim est magna non anim.</p>
      <DisplayName/>
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
