/* eslint-disable no-console */
import { useState } from "react";

import "@styles/style.css";

type CardToDoProps = {
  addToDo: (value: string) => void;
  theme: string;
};
const ToDoInput: React.FC<CardToDoProps> = ({ addToDo, theme }) => {
  const [value, setValue] = useState("");
  const handelSubmit = (e: any) => {
    e.preventDefault();
    if (!value) return;
    addToDo(value);
    setValue("");
  };
  return (
    <form className="form--container" onSubmit={handelSubmit}>
      <input
        className={`input input${theme}`}
        value={value}
        placeholder="Create a new todo..."
        onChange={(e: React.FormEvent<HTMLInputElement>) =>
          setValue(e.currentTarget.value)
        }
      />
    </form>
  );
};

export default ToDoInput;
