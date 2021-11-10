import React, {FC} from "react"; 
import {ITask} from "../Interface";

interface Props{
    task: ITask;
    deleteTask(taskNameToDelete: string): void;
}

const TodoTask: FC<Props> = ({task, deleteTask}: Props) => {
    
    const deleteClick = () => {
        deleteTask(task.taskName)
    }
    
    return (
    <div className="task">
        <div className="content">
           <span>{task.taskName}</span>
        </div>
        <button 
        onClick={deleteClick}
        >
        X
        </button>
    </div>
    );
};



export default TodoTask;