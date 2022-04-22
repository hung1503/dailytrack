import React from 'react'
import "./activities.css"
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Link } from "react-router-dom";

export default function Activities({activitiesInfo}) {
  const [data, setData] = React.useState([activitiesInfo]);
  const date = new Date();
  const today = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  const handleDelete = (id) => {
    setData(data.filter((row) => row.id !== id));
  };

  const columns = [
    { field: "date", 
      headerName: "Date", 
      width: 90,
      renderCell: (params) => {
        return (
          <div>
            {params.row.date}
          </div>
        )
      }
    },
    {
      field: "routine",
      headerName: "Daily activities",
      width: 400,
      sortable: false,
      renderCell: (params) => {
        return (
          <div className="activityList">
            {params.row.routine.map((info) => {
              return (
                <div key={info.id}>
                  <p>{info.time} - {info.activity} / </p>
                </div>
                );
              })}
          </div>
        );
      },
    },
    {
      field: "arrival time",
      headerName: "Arrival time",
      width: 100,
      renderCell: (params) => {
        return (
          <div>
            {params.row.timeTable.arrival}
          </div>
        )
      }
    },
    {
      field: "pickup time",
      headerName: "Pickup time",
      width: 100,
      renderCell: (params) => {
        return (
          <div>
            {params.row.timeTable.departure}
          </div>
        )
      }
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="activityList">
            <Link to={"/students/" + activitiesInfo.id + "/activities/" + params.row.date}>
              <button className="activityListEdit">See details</button>
            </Link>
            <DeleteOutlineIcon
              onClick={() => handleDelete(params.row.id)}
              className="activityListDelete"
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="activityListContainer">
      <div className="activityListUp">
        <h1 className="activityTitle">{activitiesInfo.firstName} {activitiesInfo.lastName} - Class: {activitiesInfo.class}</h1>
            <form className="activityForm">
              <div className="activityListItem">
                <label>Date</label>
                <input required type="text" className="activityListInput date" value={today}/>
              </div>
                <button className="activityAddBtn">Add date</button>
            </form> 
      </div>
      <DataGrid
        rows={activitiesInfo.activities}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
      />
    </div>
  );
}
