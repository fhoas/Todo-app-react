import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';

const Task = (props) => {

  const [isClicked, setIsClicked] = useState(false);
  const [isCheck, setIsCheck] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  function checkDeleting() {
    setIsClicked(!isClicked);
  }

  function checkChecking() {
    setIsCheck(!isCheck);
  }

  function checkTaskEdit() {
    setIsEdit(!isEdit);
  }

  const taskClassName = `task ${isClicked ? 'deleted' : ''} ${isCheck ? 'checked' : ''}`;
  const checkEdit = isEdit ? "true" : "false"

  return (
    <div className={taskClassName} contentEditable={checkEdit}>
      {props.data}
      <div className='icons'>
      <FontAwesomeIcon onClick={checkChecking} icon={faCheck} style={{ color: 'white', transform: "scale(1.3)" }} />
      <FontAwesomeIcon onClick={checkTaskEdit} icon={faPen} style={{ color: 'white' }} />
      <FontAwesomeIcon onClick={checkDeleting} icon={faTrash} style={{ color: 'white' }} />
      </div>
    </div>
  )
}

export default Task;