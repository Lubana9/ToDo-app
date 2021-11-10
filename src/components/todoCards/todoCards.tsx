/* eslint-disable no-console */
import { useState } from "react";

import { Input } from "antd";
import "@styles/style.css";
import "antd/dist/antd.css";
import "./style.css";

const ToDoCard = () => {
  const [value, setValue] = useState("");

  return (
    <div className="container">
      <Input
        value={value}
        size="large"
        placeholder="Create a new todo..."
        onChange={(e) => setValue(e.currentTarget.value)}
      ></Input>
    </div>
  );
};

export default ToDoCard;
