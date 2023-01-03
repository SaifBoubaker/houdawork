import { useDispatch } from "react-redux";
import { deleteTodo } from "../Redux/TodoSlice";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const { id } = todo;

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };
  console.log(todo);
  return (
    <div>
      <input type="checkbox"></input>
      {todo.title}
      <button onClick={handleDelete}> X</button>
    </div>
  );
};
export default TodoItem;
