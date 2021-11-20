/* eslint-disable no-console */
import { useState } from "react";

import ToDo from "@components/toDo";
import ToDoCard from "@components/todoCards";
import { IToDo } from "src/interfaces/todoI";
import "./style.css";
const ToDoPage = () => {
  const [todos, setTodos] = useState<IToDo[]>([
    { text: "Jog around the park 3x" },
    { text: "10 minutes meditation" },
    { text: "Read for 1 hour" },
    { text: " Pickup groceries" },
    { text: "Complete todo App" },
  ]);

  const handelAdd = (text: any) => {
    const newToDo = [...todos, { text }];
    setTodos(newToDo);
  };

  const handelComplete = (id: number) => {
    const newToDos = [...todos];
    newToDos[id].isCompleted = true;
    setTodos(newToDos);
  };

  const handelREmove = (id: number) => {
    const newToDos = [...todos];
    newToDos.splice(id, 1);
    setTodos(newToDos);
  };
  return (
    <div className="background">
      <div className="todo--container">
        <ToDoCard addToDo={handelAdd} />
        {todos.map((todo, id) => {
          return (
            <ToDo
              key={id}
              todo={todo}
              id={id}
              completeTodo={handelComplete}
              removeToDo={handelREmove}
            ></ToDo>
          );
        })}
        <div>
          <span className="todo--footer todo__itemLeft">
            {todos.length} items left{" "}
          </span>
          <span className="	 todo--footer">All </span>
          <span className=" todo--footer">Active </span>
          <span className="	 todo--footer">completed </span>
          <span className="todo--footer">Clear completed </span>
        </div>
      </div>
    </div>
  );
};

export default ToDoPage;
