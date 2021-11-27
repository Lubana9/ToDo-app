import "@styles/style.css";
type ToDoProps = {
  todo: any;
  id: number;
  removeToDo: (id: number) => void;
  theme: string;
};
const ToDo: React.FC<ToDoProps> = ({ todo, id, removeToDo, theme }) => {
  return (
    <div className={`content content${theme}`}>
      <input type="checkbox" id="todo" name="todo" value="todo" />
      <label htmlFor="todo" data-content={todo.text}>
        {todo.text}
      </label>

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
