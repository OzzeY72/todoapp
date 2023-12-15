import React,{RefObject} from 'react';
import logo from './logo.svg';
import './App.css';
import Task from './components/Task';
import { useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

interface TaskProps{
  index: number;
  order: number;
  content: string;
  completed: boolean;
  custRef: RefObject<HTMLInputElement>;
}

function App() {
  const [tasks, setTasks] = useState<TaskProps[]>(Array(0));

  tasks.push({order:0,content:"Test",completed: false,custRef:React.createRef(),index:0})
  tasks.push({order:1,content:"Text",completed: false,custRef:React.createRef(),index:1})

  return (
    <div className="App">
      <Task completed={tasks[0].completed} order={tasks[0].order} content={tasks[0].content} onDelete={()=>DeleteHandler(0)} onTextInput={()=>{InputHandler(0)}} onChecked={()=>{CheckedHandler(0)}} index={tasks[0].index} custRef={tasks[0].custRef}/>
      <Task completed={tasks[1].completed} order={tasks[1].order} content={tasks[1].content} onDelete={()=>DeleteHandler(1)} onTextInput={()=>{InputHandler(1)}} onChecked={()=>{CheckedHandler(1)}} index={tasks[1].index} custRef={tasks[1].custRef}/>
      <button className="CreateButton" onClick={CreateHandler}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
  function CreateHandler() {
    
  }
  function DeleteHandler(i:number) {
    const nextTasks = tasks.slice();
    nextTasks.splice(i,1)
    setTasks(nextTasks);
  }
  function CheckedHandler(i:number){
    const nextTasks = tasks.slice();
    nextTasks[i].completed = !tasks[i].completed;
    setTasks(nextTasks);
  }
  function InputHandler(i:number) {
    const nextTasks = tasks.slice();
    nextTasks[i].content = nextTasks[i].custRef.current?.value!;
    setTasks(nextTasks);
  }
}

export default App;
