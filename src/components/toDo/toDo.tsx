import "./style.css";
type ToDoProps = {
  todo: any;
  id: number;
  completeTodo: (id: number) => void;
  removeToDo: (id: number) => void;
};
const ToDo: React.FC<ToDoProps> = ({ todo, id, completeTodo, removeToDo }) => {
  return (
    <div className="todo-grid">
      <span className="check_icon" onClick={() => completeTodo(id)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
          <path
            fill="none"
            stroke="#FFF"
            stroke-width="2"
            d="M1 4.304L3.696 7l6-6"
          />
        </svg>
      </span>
      {todo.text}
      <span className="cross_icon" onClick={() => removeToDo(id)}>
        {" "}
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
          <path
            fill="#494C6B"
            fill-rule="evenodd"
            d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
          />
        </svg>{" "}
      </span>
    </div>
  );
};

export default ToDo;
