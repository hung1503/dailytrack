import React from 'react'
import './newClass.css'

export default function NewClass() {
  return (
    <div className="newClass">
      <h1 className="newClassTitle">New Class</h1>
      <form action="" className="newClassForm">
        <div className="newClassItem">
          <label>Class name</label>
          <input type="text" className="newClassInput" />
        </div>
        <div className="newClassItem">
          <label>Teacher</label>
          <input type="text" className="newClassInput" />
        </div>
        <div>
          <button className="newClassButton">Create</button>
        </div>
      </form>
    </div>
  )
}
