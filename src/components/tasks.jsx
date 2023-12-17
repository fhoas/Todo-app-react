import React from 'react'
import Task from './task'
import '../App'

const tasks = (props) => {
  return (
    <div className='tasksContainer'>
        {
            props.data.map((x) => (
                <Task data={x}/>
            ))
        }
    </div>
  )
}

export default tasks