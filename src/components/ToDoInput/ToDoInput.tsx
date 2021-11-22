/* eslint-disable no-console */
import { useState } from "react";

import "@styles/style.css";
import "antd/dist/antd.css";
import "./style.css";

type CardToDoProps = {
  addToDo: (value: string) => void;
};
const ToDoInput: React.FC<CardToDoProps> = ({ addToDo }) => {
  const [value, setValue] = useState("");
  const handelSubmit = (e: any) => {
    e.preventDefault();
    if (!value) return;
    addToDo(value);
    setValue("");
  };
  return (
    <form className="container" onSubmit={handelSubmit}>
      <input
        className="input input_light"
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
