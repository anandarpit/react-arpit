import React from "react";
import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com/todos/1";

const AxiosTest = () => {
  const [Todo, setTodo] = React.useState(null);
  const [Error, setError] = React.useState(null);
  const [switcher, setSwitcher] = React.useState(false);

  React.useEffect(() => {
    if (switcher) {
      axios
        .get(URL)
        .then((response) => {
          setTodo(response);
        })
        .catch((error) => {
          setError(error);
        });
      console.log("I HAVE RUN");
    }
  }, [switcher]);

  return (
    <div>
      <br />
      <br />
      <button
        onClick={() => {
          setSwitcher(!switcher);
        }}
      >
        {switcher ? "HIDE DATA" : "GET REFRESHED DATA"}
      </button>
      {Todo  && switcher && <pre>{JSON.stringify(Todo, null, 2)}</pre>}
      {Error && switcher && <pre>{JSON.stringify(Error.message, null, 2)}</pre>}
    </div>
  );
};

export default AxiosTest;
