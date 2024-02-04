import { useContext } from "react";
import { Content } from "../layout/Content/Content";
// import { useEffect, useState } from "react";
import "./Global.css";
import { TodosProvider } from "./providers/TodosContext/TodosProvider";
import { TodosContext } from "./providers/TodosContext/TodosProvider";

function App() {
  return (
    <TodosProvider>
      <h1 className="title">ToDo List</h1>
      <Content />
    </TodosProvider>
  );
}

export default App;
