import React from "react";
import "./class.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function Class() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const classData = useSelector((state) =>
    state.classes.find((u) => u._id === id)
  );
  if (!classData) {
    return <div>Loading...</div>;
  }

  const columns = [
    {
      field: "full name",
      headerName: "Full name",
      width: 200,
      renderCell: (params) => {
        return (
          <div>
            {params.row.firstName} {params.row.lastName}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 300,
      renderCell: (params) => {
        return <div>{params.row.email}</div>;
      },
    },
    {
      field: "activity",
      headerName: "Activity",
      width: 200,
      renderCell: (params) => {
        return (
          <div>
            <Link to={"/students/" + params.row.id + "/activities/"}>
              <button className="activityListEdit">See details</button>
            </Link>
          </div>
        );
      },
    },

    // {
    //   field: "action",
    //   headerName: "Action",
    //   width: 100,
    //   renderCell: (params) => {
    //     return (
    //       <div className="studentList">
    //         <DeleteOutlineIcon
    //           onClick={() => handleDelete(params.row.id)}
    //           className="studentListDelete"
    //         />
    //       </div>
    //     );
    //   },
    // },
  ];
  return (
    <div className="classContainer">
      <h1>Class: {classData.class}</h1>
      Teacher:{" "}
      {classData.teachers.map((info) => (
        <div key={info.id}>
          <p>
            {info.firstName} {info.lastName}
          </p>
        </div>
      ))}
      <div className="classTable">
        <DataGrid
          rows={classData.students}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
        />
      </div>
    </div>
  );
}
