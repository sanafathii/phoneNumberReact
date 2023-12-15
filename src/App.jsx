import React, { useReducer, useState } from "react";
import Form from "./components/Form";
import ConcatList from "./components/ConcatList";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import EditContact from "./components/EditContact";
function concatReducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "remove":
      return state.filter((item) => item.id !== action.payload);
    case "save": {
      const updatedConcatEdit = state.map((concat) => {
        if (concat.id === action.payload.id) {
          return { ...concat, ...action.payload.updatedConcat };
        }
        return concat;
      });
      return updatedConcatEdit;
    }
    default:
      return state;
  }
}

function App() {
  const [concatState, dispatch] = useReducer(concatReducer, []);
  const [concatToEdit, setConcatToEdit] = useState({});

  const addConcatHandler = (newConcat) => {
    dispatch({ type: "add", payload: newConcat });
  };
  const removeConcatHandler = (id) => {
    dispatch({ type: "remove", payload: id });
  };
  const editHandler = (concat) => {
    setConcatToEdit(concat);
  };

  const saveHandler = (id, updatedConcat) => {
    dispatch({ type: "save", payload: { id, updatedConcat } });
  };
  return (
    <div className="center-container">
      <Routes>
        <Route
          path="/"
          element={<Form addConcatHandler={addConcatHandler} />}
        />
        <Route
          path="/concatList"
          element={
            <ConcatList
              concatList={concatState}
              editHandler={editHandler}
              removeConcatHandler={removeConcatHandler}
            />
          }
        />
        <Route
          path="/editContact/:id"
          element={
            <EditContact
              concatToEdit={concatToEdit}
              saveHandler={saveHandler}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
