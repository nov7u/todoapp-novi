import React, { FC, useState } from "react";
import { ITask } from "../Interface";

interface Props {
   task: ITask;
   id: number;
   deleteTask: (taskNameToDelete: string) => void;
   handleEdit: (editValue: string, id: number) => void;
}

const TodoTask: FC<Props> = ({ task, id, deleteTask, handleEdit }) => {
   const [editTask, setEditTask] = useState(false);
   const [editValue, setEditValue] = useState(task.taskName);

   const deleteClick = () => {
      deleteTask(task.taskName);
   };

   //useEffect
   //FetchAPI
   //ShadowHeader
   const editCLick = () => {
      setEditTask(true);
   };

   const saveClick = (id: number) => {
       setEditTask(false)
       if(editValue){
           handleEdit(editValue, id)
       }else{
           setEditValue(task.taskName)
       }
   }

   const cancelClick = () => {
       
   }

   


   if (editTask) {
      return (
         <li>
            <input
               type="text"
               id="editValue" value={editValue} name="editValue"
               onChange={e => setEditValue(e.target.value.toLowerCase())}
            />

            <button
            onClick={() => saveClick (id)}
            >
               Save
            </button>

            <button
            onClick={() => cancelClick}
            >
                Cancel
            </button>
         </li>
      );
   } else {
      return (
         <div className="task">
            <div className="content">
               <span>{task.taskName}</span>
            </div>
            <button onClick={editCLick}>Edit</button>
            <button onClick={deleteClick}>Delete</button>
         </div>
      );
   }
};

export default TodoTask;


