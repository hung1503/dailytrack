import React from "react";
import "./activities.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addActivity, deleteActivity } from "../../reducer/activityReducer";

export default function Activities() {
  const { id } = useParams();
  const studentAct = useSelector((state) =>
    state.students.find((u) => u.id === id)
  );
  const dispatch = useDispatch();
  const [date, setDate] = React.useState("");
  if (!studentAct) {
    return <div>Loading...</div>;
  }
  console.log(studentAct);
  const handleDelete = (id) => {
    const ok = window.confirm("Are you sure you want to delete this?");
    if (!ok) {
      return;
    }
    dispatch(deleteActivity(id));
  };

  const handleNewDate = (e) => {
    dispatch(addActivity({ date: date, studentId: studentAct.id }));
    console.log(date);
    setDate("");
  };

  const columns = [
    {
      field: "date",
      headerName: "Date",
      width: 90,
      renderCell: (params) => {
        return <div>{params.row.date}</div>;
      },
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
                <div key={info._id}>
                  <p>
                    {info.time} - {info.activity} /{" "}
                  </p>
                </div>
              );
            })}
          </div>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="activityList">
            <Link
              to={
                "/students/" + studentAct.id + "/activities/" + params.row._id
              }
            >
              <button className="activityListEdit">See details</button>
            </Link>
            <DeleteOutlineIcon
              onClick={() => handleDelete(params.row._id)}
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
        <h1 className="activityTitle">
          {studentAct.firstName} {studentAct.lastName} - Class:{" "}
          {studentAct.class}
        </h1>
        <form className="activityForm" onSubmit={handleNewDate}>
          <div className="activityListItem">
            <label>Date</label>
            <input
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              className="activityListInput date"
            />
          </div>
          <button className="activityAddBtn">Add date</button>
        </form>
      </div>
      <DataGrid
        rows={studentAct.activities}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
        disableSelectionOnClick
        getRowId={(row) => row._id}
      />
    </div>
  );
}
