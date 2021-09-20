import React from "react";
import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com/todos/"

const AxiosTest = () => {
  const [Todo, setTodo] = React.useState(null);
  const [Error, setError] = React.useState(null);

  React.useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        setTodo(response);
      })
      .catch((error) => {setError(error)});
  }, []);

  return (
    <div>
      {/* <button onClick={}>Get Data</button> */}
      {Todo && <pre>{JSON.stringify(Todo, null, 2)}</pre>}
      {Error && <pre>{JSON.stringify(Error.message, null, 2)}</pre>}
    </div>
  );
};

export default AxiosTest;
