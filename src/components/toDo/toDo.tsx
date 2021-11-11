type ToDoProps = {
  todo: any;
  id: number;
  completeTodo: (id: number) => void;
  removeToDo: (id: number) => void;
};
const ToDo: React.FC<ToDoProps> = ({ todo, id, completeTodo, removeToDo }) => {
  return (
    <div>
      {todo.text}
      <div>
        <button onClick={() => completeTodo(id)}> ✓</button>
        <button onClick={() => removeToDo(id)}> x </button>
      </div>
    </div>
  );
};

export default ToDo;
