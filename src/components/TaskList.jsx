import React from 'react'
import TaskShow from './Taskshow'

function taskList({tasks,onClear}) {
    return (
        <div className="task-list">
                {tasks.map((tasks,index)=>{
                        return <TaskShow key={index} tasks={tasks} onClear={onClear}/>
                })}
        </div>
    );
}

export default taskList;