import React, { ChangeEvent, ChangeEventHandler,MouseEventHandler,FocusEventHandler, RefObject, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './Task.css';

export interface ITaskProps{
  index: number;
  order: number;
  content: string;
  completed: boolean;
  custRef: RefObject<HTMLInputElement>;
  onTextInput: ChangeEventHandler<HTMLInputElement>;
  onChecked: ChangeEventHandler<HTMLInputElement>;
  onDelete: MouseEventHandler<HTMLButtonElement>;
}

function Task(props:ITaskProps) {
  const [readonly, setReadonly] = useState(false);

  return (
    <div className={props.completed ? "Task completed" : "Task incompleted"} style={{order: props.order}}>
      <input className="CheckBox" onChange={props.onChecked} type="checkbox" defaultChecked={props.completed}/>  
      <input  ref={props.custRef} className='ContentText' value={props.content} onChange={props.onTextInput} onBlur={()=>setReadonly(true)} readOnly={readonly}></input>
      <button onClick={()=>setReadonly(false)} className="EditButton"><FontAwesomeIcon icon={faPencil} /></button>
      <button onClick={props.onDelete} className="DeleteButton"><FontAwesomeIcon icon={faTrash} /></button>
    </div>
  );
}

export default Task;
