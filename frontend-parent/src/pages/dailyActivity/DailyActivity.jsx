import React from "react";
import "./dailyActivity.css";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { addParentTime } from "../../reducer/activityReducer";
import { useParams } from "react-router-dom";

export default function DailyActivity({ user }) {
  const profile = useSelector((state) =>
    state.students.find((u) => u.username === user.username)
  );
  const { dateId } = useParams();
  const activities = useSelector((state) =>
    state.activities.find((u) => u._id === dateId)
  );
  console.log(activities);
  const [arrive, setArrive] = React.useState("");
  const [pickup, setPickup] = React.useState("");
  const dispatch = useDispatch();

  if (!profile) {
    return <div>loading ...</div>;
  }

  if (!activities) {
    return <div>loading ...</div>;
  }
  const handleAddRoutine = (e) => {
    const newRoutine = {
      arrival: arrive,
      departure: pickup,
    };
    dispatch(addParentTime(activities._id, newRoutine));
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
          {profile.firstName} {profile.lastName} - class: {profile.class}
        </h1>
        <h2>{activities.date}</h2>
        <h3>Time to arrive and pickup</h3>
        {activities.parentTime ? (
          <div>
            <p>Arrival time: {activities.parentTime.arrival}</p>
            <p>Pickup time: {activities.parentTime.departure}</p>
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
          rows={activities.routine}
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
