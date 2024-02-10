import React from "react";
import { useState } from "react";

function CreateTask({onCreate}) {
  const[person,setPerson]=useState(" ")
  const [task, setTask] = useState(" ")
 
  const handlePersonSubmit=(e)=>{
    setPerson(e.target.value)
    
  }
  const handleChange = (e) => {
    setTask(e.target.value)
     
  }
  const handleSubmit = () => {
   // console.log(task,person)
   
    onCreate(task,person)
     setTask(" ")
  };
  return (
    <div className="task-creator">
        
      <h3>Görev Başlığını Giriniz</h3>
      <textarea 
      rows={5}
      width={500}
      onChange={handleChange}/>
      <h2>Görev Atanan Kişiyi Seçiniz</h2>
      <select name="persons" id="persons"  onChange={handlePersonSubmit}>
        <option value="boş"> </option>
        <option value="Emre">Emre</option>
        <option value="Rıfat">Rıfat</option>
        <option value="Mehmet">Mehmet</option>
      </select>
      <button className="task-creator-btn"onClick={handleSubmit}>Oluştur</button>
    </div>
  );
}
export default CreateTask;
