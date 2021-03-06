/* eslint-disable no-console */
import { useState } from "react";

import Filter from "@components/Filter";
import ThemeTumbler from "@components/ThemeTumbler";
import ToDo from "@components/toDo";
import ToDoInput from "@components/ToDoInput";
import { IToDo } from "src/interfaces/todoI";
import "bootstrap/dist/css/bootstrap.css";
import "@styles/style.css";

const ToDoPage: React.FC = () => {
  const [theme, setTheme] = useState("_light");
  const [todos, setTodos] = useState<IToDo[]>([
    { text: "Jog around the park 3x", isCompleted: false },
    { text: "10 minutes meditation", isCompleted: false },
    { text: "Read for 1 hour", isCompleted: false },
    { text: " Pickup groceries", isCompleted: false },
    { text: "Complete todo App", isCompleted: false },
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
  const handelClear = () => {
    const newToDos = [...todos];
    newToDos.length = 0;
    setTodos(newToDos);
  };

  return (
    <div className={`container-fluid background background${theme}`}>
      <div className="app--container">
        <ThemeTumbler theme={theme} setTheme={setTheme} />
        <div className="grid grid--1x1">
          <ToDoInput addToDo={handelAdd} theme={theme} />
        </div>
        <div className="content--container">
          {todos.map((todo, id) => {
            return (
              <ToDo
                key={id}
                todo={todo}
                id={id}
                theme={theme}
                removeToDo={handelREmove}
              ></ToDo>
            );
          })}
          <Filter theme={theme} item={todos.length} onClear={handelClear} />
        </div>
      </div>
    </div>
  );
};

export default ToDoPage;
