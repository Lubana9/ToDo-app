/* eslint-disable no-console */
import { useState } from "react";

import ThemeTumbler from "@components/ThemeTumbler";
import ToDo from "@components/toDo";
import ToDoInput from "@components/ToDoInput";
import { IToDo } from "src/interfaces/todoI";
import "@styles/style.css";

const ToDoPage: React.FC = () => {
  const [theme, setTheme] = useState("_light");
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
    <div className={` background background${theme}`}>
      <div className="app--container">
        <ThemeTumbler theme={theme} setTheme={setTheme} />
        <div className="grid grid--1x1">
          <ToDoInput addToDo={handelAdd} theme={theme} />
        </div>
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
        <div className={`todo--footer todo--footer${theme}`}>
          {todos.length} items left{" "}
        </div>
      </div>
    </div>
  );
};

export default ToDoPage;
