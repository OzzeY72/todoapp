import React, { ChangeEvent, ChangeEventHandler,MouseEventHandler,FocusEventHandler, RefObject } from 'react';
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
  readonly: boolean;
  onTextInput: ChangeEventHandler<HTMLInputElement>;
  onChecked: ChangeEventHandler<HTMLInputElement>;
  onEdit: MouseEventHandler<HTMLButtonElement>;
  onFocusOut: FocusEventHandler<HTMLInputElement>;
  onDelete: MouseEventHandler<HTMLButtonElement>;
}

function Task(props:ITaskProps) {
  return (
    <div className={props.completed ? "Task completed" : "Task incompleted"} style={{order: props.order}}>
      <input className="CheckBox" onChange={props.onChecked} type="checkbox" defaultChecked={props.completed}/>  
      <input  ref={props.custRef} className='ContentText' value={props.content} onChange={props.onTextInput} onBlur={props.onFocusOut} readOnly={props.readonly}></input>
      <button onClick={props.onEdit} className="EditButton"><FontAwesomeIcon icon={faPencil} /></button>
      <button onClick={props.onDelete} className="DeleteButton"><FontAwesomeIcon icon={faTrash} /></button>
    </div>
  );
}

export default Task;
