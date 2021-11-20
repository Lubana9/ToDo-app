/* eslint-disable no-console */
import { useState } from "react";

import { Input } from "antd";
import "@styles/style.css";
import "antd/dist/antd.css";
import "./style.css";

type CardToDoProps = {
  addToDo: (value: string) => void;
};
const ToDoCard: React.FC<CardToDoProps> = ({ addToDo }) => {
  const [value, setValue] = useState("");
  const handelSubmit = (e: any) => {
    e.preventDefault();
    if (!value) return;
    addToDo(value);
    setValue("");
  };
  return (
    <form className="container" onSubmit={handelSubmit}>
      <Input
        value={value}
        size="large"
        placeholder="Create a new todo..."
        onChange={(e: React.FormEvent<HTMLInputElement>) =>
          setValue(e.currentTarget.value)
        }
      ></Input>
    </form>
  );
};

export default ToDoCard;
