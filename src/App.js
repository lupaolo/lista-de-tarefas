import React, { useState } from 'react';
import './App.css';


function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editTaskIndex, setEditTaskIndex] = useState(-1);

  const addTask = () => {
    if (newTask.trim() !== '') {
      if (editTaskIndex === -1) {
        setTasks([...tasks, newTask]);
      } else {
        const updatedTasks = [...tasks];
        updatedTasks[editTaskIndex] = newTask;
        setTasks(updatedTasks);
        setEditTaskIndex(-1);
      }
      setNewTask('');
    }
  };

  const editTask = (index) => {
    setNewTask(tasks[index]);
    setEditTaskIndex(index);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>Lista de Tarefas</h1>
      <div>
        <input
          type="text"
          placeholder="Adicione uma tarefa"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>
          {editTaskIndex === -1 ? 'Adicionar' : 'Editar'}
        </button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => editTask(index)}>Editar</button>
            <button onClick={() => deleteTask(index)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
