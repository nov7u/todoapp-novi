import React, { FC, ChangeEvent, useState } from 'react';
import './App.css';
import TodoTask from './Components/TodoTask';
import { ITask } from './Interface';

const App: FC = () => {

  const [task, setTask] = useState<string>("");
  const [todoList, setTodoList] = useState<ITask[]>([]);
  
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task"){
      setTask(event.target.value)
    }

  };

  const addTask = (): void => {
    const newTask = {taskName: task};
    setTodoList([...todoList, newTask]);
    // setTodoList("");
    console.log(todoList);
  };

  const deleteTask = (taskNameToDelete:string): void => {
    setTodoList(todoList.filter((task) => {
      return task.taskName !== taskNameToDelete
    }))
  }

  return (
    <div className="App">
      <div className="header">
        <div className="input-container">
          <input 
            type="text" 
            placeholder="Input" 
            name="task"
            value={task}
            onChange={handleChange} 
          />
        </div>
        
        <button onClick={addTask}>Submit</button>
      </div>
      <div className="todoList">
        {todoList.map((task: ITask, index: number) => {
          return <TodoTask key={index} task={task} deleteTask={deleteTask} />;
        })}
      </div>
    </div>
  );
}

export default App;
