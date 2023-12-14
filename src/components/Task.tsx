import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './Task.css';

function Task() {
  return (
    <div className="Task">
      <input className="CheckBox" type="checkbox" />
      <div className="TextContainer">
        <p>Lorem lo ipsum dolor sit, amet consectetur adipisicing elit. Sed impedit dolores ut dignissimos accusamus tenetur similique possimus quis maxime odit quam nemo dicta, in nisi quos soluta, saepe sapiente inventore.</p>
      </div>
      <button className="EditButton"><FontAwesomeIcon icon={faPencil} /></button>
      <button className="DeleteButton"><FontAwesomeIcon icon={faTrash} /></button>
    </div>
  );
}

export default Task;
