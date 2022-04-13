import React from 'react'
import "./widgetLg.css";
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function WidgetLg() {
  return (
    <div className="widgetLg"> 
      <span className="widgetLgTitle">New Teachers</span>
      <ul className="widgetLgList">
        <li className="widgetLgListItem">
          <img src="" alt="" className="widgetLgImg"/>
          <div className="widgeLgTeacher">
            <span className="widgetLgName">John Doe</span>
          </div>
          <button className="widgetLgButton">
            <VisibilityIcon className="widgetLgIcon"/>
            Display
          </button>
        </li>
        <li className="widgetLgListItem">
          <img src="" alt="" className="widgetLgImg"/>
          <div className="widgeLgTeacher">
            <span className="widgetLgName">John Doe</span>

          </div>
          <button className="widgetLgButton">
            <VisibilityIcon className="widgetLgIcon"/>
            Display
          </button>
        </li>
        <li className="widgetLgListItem">
          <img src="" alt="" className="widgetLgImg"/>
          <div className="widgeLgTeacher">
            <span className="widgetLgName">John Doe</span>
          </div>
          <button className="widgetLgButton">
            <VisibilityIcon className="widgetLgIcon"/>
            Display
          </button>
        </li>
      </ul>
    </div>
  )
}
