import { useState } from "react";
import "../../App.css";

function TodoDemo() {
  const [todos, setTodos] = useState<string[]>([
    "Learn React fundamentals",
    "Build a component gallery",
  ]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, inputValue.trim()]);
      setInputValue("");
    }
  };

  const removeTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const removeAll = () => {
    setTodos([]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") addTodo();
  };

  return (
    <div className="todo-container">
      {/* Input + Add + Remove All Buttons */}
      <div className="todo-controls">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Add a new task..."
          className="todo-input"
        />
        <button onClick={addTodo} className="todo-add-btn">
          Add
        </button>
        {todos.length > 0 && (
          <button onClick={removeAll} className="todo-clear-btn">
            Remove All
          </button>
        )}
      </div>

      {/* Todo List */}
      {todos.length === 0 ? (
        <p className="todo-empty">No tasks yet. Add one above!</p>
      ) : (
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <li key={index} className="todo-item">
              <span className="todo-text">{todo}</span>
              <button
                onClick={() => removeTodo(index)}
                className="todo-remove-btn"
                aria-label="Remove task"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoDemo;
