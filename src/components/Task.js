import React from 'react'


function Task({ task }) {
  return (
    <div className="task" style={{ textDecoration: task.completed ? "line-through" : "" }} >
      {task.title}
    </div>
  )
}

export default Task
