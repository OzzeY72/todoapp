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
    const taskElements = this.state.tasks.map((task)=><Task completed={task.completed} order={task.order} content={task.content} onDelete={()=>this.DeleteHandler(task.index)} onTextInput={()=>{this.InputHandler(task.index)}} onChecked={()=>{this.CheckedHandler(task.index)}} index={task.index} custRef={task.custRef}/>);
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
    nextTasks.push({order:nextTasks.length,content:"",completed: false,custRef:React.createRef(),index:nextTasks.length});
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
