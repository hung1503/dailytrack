import React from "react";
import "./dailyActivity.css";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch } from "react-redux";
import { addParentTime } from "../../reducer/activityReducer";

export default function DailyActivity({ dateInfo, oneStudentData }) {
  const [data, setData] = React.useState(dateInfo.routine);
  const [arrive, setArrive] = React.useState("");
  const [pickup, setPickup] = React.useState("");
  const dispatch = useDispatch();

  const handleAddRoutine = (e) => {
    e.preventDefault();
    const newRoutine = {
      arrival: arrive,
      departure: pickup,
    };
    dispatch(addParentTime(dateInfo._id, newRoutine));
    setArrive("");
    setPickup("");
  };

  const columns = [
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
        return <div>{params.row.activity}</div>;
      },
    },
  ];
  return (
    <div className="dailyActivityContainer">
      <div className="dailyActivityTop">
        <h1>
          {oneStudentData.firstName} {oneStudentData.lastName} - class:{" "}
          {oneStudentData.class}
        </h1>
        <h2>{dateInfo.date}</h2>
        <h3>Time to arrive and pickup</h3>
        {dateInfo.parentTime ? (
          <div>
            <p>Arrival time: {dateInfo.parentTime.arrival}</p>
            <p>Pickup time: {dateInfo.parentTime.departure}</p>
          </div>
        ) : (
          <p>No arrival time</p>
        )}
      </div>

      <form className="dailyActivityForm" onSubmit={handleAddRoutine}>
        <div className="dailyActivityItem">
          <label>Arrival time</label>
          <input
            required
            className="dailyActivityInput time"
            onChange={(e) => setArrive(e.target.value)}
            value={arrive}
          />
        </div>
        <div className="dailyActivityItem">
          <label>Pickup time</label>
          <input
            required
            className="dailyActivityInput time"
            onChange={(e) => setPickup(e.target.value)}
            value={pickup}
          />
        </div>
        <div>
          <button className="dailyActivityButton">Add Time</button>
        </div>
      </form>
      <div className="dailyActivityTable">
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[8]}
          disableSelectionOnClick
          getRowId={(row) => row._id}
        />
      </div>
    </div>
  );
}
