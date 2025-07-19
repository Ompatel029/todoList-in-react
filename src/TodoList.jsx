import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
  let [task, setTask] = useState([{ tasks: "wake up", id: uuidv4(), isDone: false}]);
  let [newTask, setNewTask] = useState("");

  let addTask = () => {
    if (newTask.trim() !== "") {
      setTask([...task, { tasks: newTask, id: uuidv4(), isDone: false }]);
    }
    setNewTask("");
  };

  let deleteTask = (id) =>{
    let updatedTasks = task.filter((item) => item.id !== id);
    setTask(updatedTasks);
    console.log(updatedTasks);
  }

  let updatedTasks = () => {
    let newArr = task.map((item) => {
      return { ...item, tasks: item.tasks.toUpperCase() };
    });
    setTask(newArr);
    console.log(newArr);
  }
  
  let markAsDone = (id) => {
  setTask((prevTasks) => {
    return prevTasks.map((item) => {
      if (item.id === id) {
        return { ...item, isDone: true };
      } 
      else {
        return item;
      }
    });
  });
};

let markallAsDone = () => {
  setTask((prevTasks) => {  
    return prevTasks.map((item) => {
      return { ...item, isDone: true };
    });
  });
};
  

  return (
    <div>
      <input placeholder="Add a new task" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
      <br />
      <button onClick={addTask}>Add Task</button>
      <br /><br /><br />
      <hr />
      <h1>Todo List</h1>
      <ol>
        {task.map((item) => (
          <li key={item.id}>
            <h2 style={item.isDone ? { textDecorationLine: "line-through" } : {}}>{item.tasks}</h2>
            <button onClick={() => deleteTask(item.id)}>Delete Task</button>
            <br />     
            <button onClick={() => markAsDone(item.id)}>Mark as Done</button>
            <hr />
        </li>
        ))}
      </ol>
      <br /><br />
    <button onClick={markallAsDone}>Mark all as Done</button>
    </div>
  );
}
