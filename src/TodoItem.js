import React from 'react';
import './todoItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"
import { faTrash } from "@fortawesome/free-solid-svg-icons"

function TodoItem(props) {
  return (

    <li className="TodoItem">
      <FontAwesomeIcon className='icon icon-check' icon={faCheckCircle} />
      
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      
      <FontAwesomeIcon className='icon icon-delete' icon={faTrash} />

    </li>
  );
}

export { TodoItem };