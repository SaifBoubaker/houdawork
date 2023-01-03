import "./App.css";
import AddTodoForm from "./Components/AddTodoForm";
import TodoList from "./Components/TodoList";
import { useSelector } from "react-redux";

function App() {
  const { todos } = useSelector((state) => state.todo);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <i>
            "Many of life's failures are people who did not realize how close
            they were to success when they gave up." - Thomas Edison
          </i>
        </p>
        <br></br>
        <h1>My Todo List</h1>
        <AddTodoForm></AddTodoForm>
        <TodoList todos={todos}></TodoList>
      </header>
    </div>
  );
}

export default App;
