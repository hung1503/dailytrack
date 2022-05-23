import React from "react";
import "./activities.css";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Activities({ user }) {
  const student = useSelector((state) =>
    state.students.find((u) => u.username === user.username)
  );
  if (!student) {
    return <div>loading ...</div>;
  }
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
            <Link to={"/activities/" + params.row._id}>
              <button className="activityListEdit">See details</button>
            </Link>
          </div>
        );
      },
    },
  ];

  return (
    <div className="activityListContainer">
      <div className="activityListUp">
        <h1 className="activityTitle">
          {student.firstName} {student.lastName} - Class: {student.class}
        </h1>
      </div>
      <DataGrid
        rows={student.activities}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        getRowId={(row) => row._id}
      />
    </div>
  );
}
