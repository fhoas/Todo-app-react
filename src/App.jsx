import './App.css'
import Tasks from './components/tasks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import React, { useState, useEffect } from 'react';


function App() {

  var [inputValue, setInputValue] = useState('')
  var [tasks, setTasks] = useState([])

  function eventHandle(e){
    setInputValue(e.target.value)
  }

  function sendData(){
    if (inputValue.trim() !== '') {
      setTasks(prevTasks => [...prevTasks, inputValue]);
      setInputValue('');
    }
  }

  function handleKeyPress(e) {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      setTasks(prevTasks => [...prevTasks, inputValue]);
      setInputValue('');
    }
  }

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  return (
    <div className="mainContainer">
      <div className="input">
      <input onChange={eventHandle} onKeyPress={handleKeyPress} value={inputValue} type="text" placeholder="Write your task!"/>
      <FontAwesomeIcon onClick={sendData} icon={faPlus} style={{ color: 'white' }} />
      </div>
      <Tasks data={tasks}/>
    </div> 
  )
}

export default App


