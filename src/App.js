import React, { useReducer, useState } from "react";
import { v4 as uuid } from "uuid";
const initialState = {
  toDos: [],
};

const ADD = "add";
const DEL = "del";

const reducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return { toDos: [...state.toDos, { text: action.payload, id: uuid() }] };
    case DEL:
      return {
        toDos: state.toDos.filter((toDo) => toDo.id !== action.payload),
      };
    default:
      throw new Error();
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newToDo, setNewToDo] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ADD, payload: newToDo });
    setNewToDo("");
  };
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setNewToDo(value);
  };

  return (
    <>
      <h1>Add toDos</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={newToDo}
          placeholder="Write toDos"
          onChange={onChange}
        />
      </form>
      <ul>
        <h2>ToDos</h2>
        {state.toDos.map((toDo) => (
          <li key={toDo.id}>
            <span>{toDo.text}</span>
            <button onClick={() => dispatch({ type: DEL, payload: toDo.id })}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
