import TodoItem from "./TodoItem";
const TodoList = ({ todos }) => {
  return (
    <ul className="list-group">
      {todos.map((el) => (
        <TodoItem todo={el} />
      ))}
    </ul>
  );
};

export default TodoList;
