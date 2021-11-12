import React, { FC, ChangeEvent, useState} from "react"
import "./App.css"
import TodoTask from "./Components/TodoTask"
import { ITask } from "./Interface"

const App: FC = () => {
   const [task, setTask] = useState<string>("")
   const [todoList, setTodoList] = useState<ITask[]>([])

   const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
      if (event.target.name === "task") {
         setTask(event.target.value)
      }
   }

   const addTask = (): void => {
      const newTask = { taskName: task }
      setTodoList([...todoList, newTask])
      setTask("");
      console.log(todoList)
   }

   const deleteTask = (taskNameToDelete: string): void => {
      setTodoList(
         todoList.filter((task) => {
            return task.taskName !== taskNameToDelete
         })
      )
   }

   const handleEdit = (editValue: string, id: number): void => {
    const newTodoList = [...todoList]
    newTodoList.forEach((task, index) =>{
      if(index === id){
        task.taskName = editValue
      }
    })
    setTodoList(newTodoList)
 }

   return (
      <div className="App">
         <div className="header">
            <div className="input-container">
               <input
                  type="text"
                  placeholder="Input"
                  name="task"
                  id={task}
                  value={task}
                  onChange={handleChange}
               />
            </div>

            <button onClick={addTask}>Submit</button>
         </div>
         <div className="todoList">
            {todoList.map((task: ITask, index: number) => {
               return (
                  <TodoTask key={index} id={index} task={task} deleteTask={deleteTask}
                  handleEdit={handleEdit}
                  />
               )
            })}
         </div>
      </div>
   )
}

export default App
