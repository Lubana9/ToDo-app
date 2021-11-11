/* eslint-disable no-console */
import { useState } from "react";

import ToDoCard from "@components/todoCards";

const ToDoPage = () => {
  const [todos, setTodos] = useState([
    { text: "Jog around the park 3x" },
    { text: "10 minutes meditation" },
    { text: "Read for 1 hour" },
    { text: " Pickup groceries" },
    { text: "Complete todo App" },
  ]);

  const handelAdd = (text: string) => {
    const newToDo = [...todos, { text }];
    setTodos(newToDo);
    console.log(newToDo);
  };
  return (
    <>
      <ToDoCard addToDo={handelAdd} />
    </>
  );
};

export default ToDoPage;
