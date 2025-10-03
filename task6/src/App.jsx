import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');

  const addTask = () => {
    if (input.trim() === '') return;

    const newTask = {
      id: Date.now(),
      text: input,
      completed: false
    };
    setTasks([...tasks, newTask]);
    setInput('');
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const startEditing = (id, text) => {
    setEditId(id);
    setEditText(text);
  };

  const saveEdit = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, text: editText } : task
    ));
    setEditId(null);
    setEditText('');
  };

  return (
    <div className="app">
      <h1>📝 To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add a new task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <ul className="task-list">
        {tasks.map(task => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            {editId === task.id ? (
              <>
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="edit-input"
                />
                <button onClick={() => saveEdit(task.id)}>✅</button>
              </>
            ) : (
              <>
                <span onClick={() => toggleComplete(task.id)}>{task.text}</span>
                <div>
                  <button onClick={() => startEditing(task.id, task.text)}>✏️</button>
                  <button onClick={() => deleteTask(task.id)}>❌</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
