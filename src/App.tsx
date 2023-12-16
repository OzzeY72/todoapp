import React,{RefObject} from 'react';
import logo from './logo.svg';
import './App.css';
import Task from './components/Task';
import { useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

interface TaskProps{
  content: string;
  completed: boolean;
  custRef: RefObject<HTMLInputElement>;
}
interface IAppState{
  tasks: TaskProps[]
}

class App extends React.Component<{},IAppState> {
  constructor(props:{}){
    super(props);
    this.state = {
      tasks: Array<TaskProps>(0)
    };
  }
  render() {
    const taskElements = this.state.tasks.map((task,index)=><Task completed={task.completed} order={index} content={task.content} onDelete={()=>this.DeleteHandler(index)} onTextInput={()=>{this.InputHandler(index)}} onChecked={()=>{this.CheckedHandler(index)}} custRef={task.custRef}/>);
    console.log(this.state.tasks);
    return (
      <div className="App">
        {taskElements}
        <button className="CreateButton" onClick={()=>{this.CreateHandler()}}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    );
  }
  CreateHandler () {
    const nextTasks = this.state.tasks.slice();
    nextTasks.push({content:"",completed: false,custRef:React.createRef()});
    this.setState({tasks:nextTasks});
  }
  DeleteHandler(i:number) {
    const nextTasks = this.state.tasks.slice();
    nextTasks.splice(i,1)
    this.setState({tasks:nextTasks});
  }
  CheckedHandler(i:number){
    const nextTasks = this.state.tasks.slice();
    nextTasks[i].completed = !this.state.tasks[i].completed;
    this.setState({tasks:nextTasks});
  }
  InputHandler(i:number) {
    const nextTasks = this.state.tasks.slice();
    nextTasks[i].content = nextTasks[i].custRef.current?.value!;
    this.setState({tasks:nextTasks});
  }
}

export default App;
