import { useState } from "react";
import './App.css';
import Card from "./components/Card";
import data from "./Data/tasks.json"

function App() { 
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tasks, setTasks] = useState(data);
  const [place,setPlace] = useState("Enter titile")

  //deleting exsisting task
  const Del = (index) => {
    const copyCat = [...tasks];
    copyCat.splice(index, 1);
    setTasks(copyCat);
  };


  // Adding new task
  const submit = (e) => {
    e.preventDefault();
    const newTask = { 
      title, 
      description,
      status:false,
      timestamp: new Date().toLocaleString(),
      isExpended:false
    };

    //existing task
    const taskExists = tasks.find(task => task.title === title);

    if (taskExists) {
      setTitle("")
      setDescription("")
      setPlace("This task is already in List")
      // alert("A task with the same title already exists. Please choose a different title.");
      return;
    }
    setTasks([...tasks, newTask]);
    setTitle("");
    setDescription("");
    setPlace("Enter title")
    
  };

  //Toogle to Expand to show extra things
  const toggleExpand = (index) => {
    const updatedTasks = tasks.map((task, idx) => {
      if (idx === index) {
        return { ...task, isExpanded: !task.isExpanded };
      }
      return task;
    });
    setTasks(updatedTasks);
  };


  //Toogle to change Tast status (pending to complete or vice versa)
  const toggleStatus = (index) => {
    const updatedTasks = tasks.map((task, idx) => {
      if (idx === index) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  //UI
  return (
    <div className="h-screen w-full text-white bg-slate-800 flex justify-center items-start flex-wrap overflow-hidden">
      
      <div className="h-[90%] w-[80%] mt-0 ">
        {/* Generating each task */}
      <div className="h-6 w-[100%] mt-3 text-4xl flex justify-center items-center font-mono font-bold text-orange-500">TODO-LIST</div>
        <form onSubmit={submit} className="h-[20%] w-full mt-0 flex justify-center gap-3 items-center">
          <input 
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder={place}
            className="text-black p-2 rounded-lg"
            required
          />
          <input 
            type="text" 
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="text-black p-2 rounded-lg"
            required
          />
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 p-2 rounded-lg">Add Task</button>
        </form>
        
        {/* Display Area */}
        <div id="Display" className="bg-slate-500 h-[80%] w-full rounded-xl p-2 overflow-auto hide-scrollbar">
          {tasks.map((task, index) => (
            <Card
              key={index}
              index={index}
              title={task.title}
              description={task.description}
              Dell={Del}
              status={task.status}
              isExpanded={task.isExpanded}
              timestamps={task.timestamp}
              toogle={()=>toggleExpand(index)}
              toogleStatus={()=>toggleStatus(index)}
               
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
