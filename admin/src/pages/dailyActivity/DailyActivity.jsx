import React from 'react'
import "./dailyActivity.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export default function DailyActivity({dateInfo, dailyActivityInfo}) {
  const [data, setData] = React.useState(dateInfo.routine);
  const handleDelete = (id) => {
    setData(data.filter((row) => row.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "time",
      headerName: "Time",
      width: 100,
    },
    {
      field: "activity",
      headerName: "Activity",
      width: 400,
      renderCell: (params) => {
        return (
          <div>
            {params.row.activity}
          </div>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 100,
      renderCell: (params) => {
        return (
          <div className="studentList">
            <DeleteOutlineIcon
              onClick={() => handleDelete(params.row.id)}
              className="studentListDelete"
            />
          </div>
        );
      },
    },
  ];
  return (
    <div className="dailyActivityContainer">
      <h1>{dailyActivityInfo.firstName} {dailyActivityInfo.lastName} - class: {dailyActivityInfo.class}</h1>
      <h2>{dateInfo.date}</h2>
      <form className="dailyActivityForm">
        <div className="dailyActivityItem">
          <label>Time</label>
          <input required type="text" className="dailyActivityInput time" />
        </div>
        <div className="dailyActivityItem">
          <label>Activity</label>
          <input required type="text" className="dailyActivityInput activity" />
        </div>
        <div>
          <button className="dailyActivityButton">Add activity</button>
        </div>
      </form>
      <div className="dailyActivityTable">
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
        />
      </div>
    </div>
  )
}
