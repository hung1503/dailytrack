import "./widgetSm.css";
import React from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function WidgetSm() {
  return (
    <div className="widgetSm"> 
      <span className="widgetSmTitle">New Students</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src="" alt="" className="widgetSmImg"/>
          <div className="widgetSmStudent">
            <span className="widgetSmName">John Doe</span>
            <span className="widgetSmClass">Class 1A</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon"/>
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="" alt="" className="widgetSmImg"/>
          <div className="widgetSmStudent">
            <span className="widgetSmName">John Doe</span>
            <span className="widgetSmClass">Class 1A</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon"/>
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="" alt="" className="widgetSmImg"/>
          <div className="widgetSmStudent">
            <span className="widgetSmName">John Doe</span>
            <span className="widgetSmClass">Class 1A</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon"/>
            Display
          </button>
        </li>
      </ul>
    </div>
  )
}
