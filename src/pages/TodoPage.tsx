/* eslint-disable no-console */
import { useState } from "react";

import ToDo from "@components/toDo";
import ToDoInput from "@components/ToDoInput";
import { IToDo } from "src/interfaces/todoI";
import "./style.css";
import "../components/toDo/style.css";
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

  const handelREmove = (id: number) => {
    const newToDos = [...todos];
    newToDos.splice(id, 1);
    setTodos(newToDos);
  };
  return (
    <div className="background light_background">
      <div className="todo--container  ">
        <ToDoInput addToDo={handelAdd} />
        {todos.map((todo, id) => {
          return (
            <ToDo key={id} todo={todo} id={id} removeToDo={handelREmove}></ToDo>
          );
        })}

        <span className="  todo--footer">{todos.length} items left </span>
      </div>
    </div>
  );
};

export default ToDoPage;
