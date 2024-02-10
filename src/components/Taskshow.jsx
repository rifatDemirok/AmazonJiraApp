import React from "react";

function Taskshow({ tasks,onClear }) {
  const handleOK=()=>{
    onClear(tasks.id)
  }
  return (
    
      <div className="task-show">
       
        <h3>{tasks.person}</h3>
        <h4>Göreviniz</h4>
        <p>{tasks.task}</p>
        <div>
          <button className="task-btn" onClick={handleOK}>Tamamlandı
          
          </button>
          <button className="task-btn-delete">İptal</button>
        </div>
      </div>
   
  );
}

export default Taskshow;
