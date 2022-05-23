import React from "react";
import "./dailyActivity.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addActivityRoutine,
  deleteRoutine,
} from "../../reducer/activityReducer";

export default function DailyActivity() {
  const { id } = useParams();
  const { dateId } = useParams();
  const studentAct = useSelector((state) =>
    state.students.find((u) => u.id === id)
  );
  const activities = useSelector((state) =>
    state.activities.find((u) => u._id === dateId)
  );
  const dispatch = useDispatch();
  const [time, setTime] = React.useState("");
  const [activity, setActivity] = React.useState("");
  if (!studentAct) {
    return <div>Loading...</div>;
  }
  if (!activities) {
    return <div>Loading...</div>;
  }

  const handleDelete = (id) => {
    const ok = window.confirm("Are you sure you want to delete this?");
    if (!ok) {
      return;
    }
    dispatch(deleteRoutine(activities._id, { routineId: id }));
  };

  const handleAddRoutine = (e) => {
    const newRoutine = {
      time: time,
      activity: activity,
    };
    dispatch(addActivityRoutine(activities._id, newRoutine));
    setTime("");
    setActivity("");
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
    {
      field: "action",
      headerName: "Action",
      width: 100,
      renderCell: (params) => {
        return (
          <div className="studentList">
            <DeleteOutlineIcon
              onClick={() => handleDelete(params.row._id)}
              className="studentListDelete"
            />
          </div>
        );
      },
    },
  ];
  return (
    <div className="dailyActivityContainer">
      <div className="dailyActivityTop">
        <h1>
          {studentAct.firstName} {studentAct.lastName} - class:{" "}
          {studentAct.class}
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
          <label>Time</label>
          <input
            required
            className="dailyActivityInput time"
            onChange={(e) => setTime(e.target.value)}
            value={time}
          />
        </div>
        <div className="dailyActivityItem">
          <label>Activity</label>
          <input
            required
            className="dailyActivityInput activity"
            onChange={(e) => setActivity(e.target.value)}
            value={activity}
          />
        </div>
        <div>
          <button className="dailyActivityButton">Add activity</button>
        </div>
      </form>
      <div className="dailyActivityTable">
        <DataGrid
          rows={activities.routine}
          columns={columns}
          pageSize={9}
          rowsPerPageOptions={[9]}
          disableSelectionOnClick
          getRowId={(row) => row._id}
        />
      </div>
    </div>
  );
}
