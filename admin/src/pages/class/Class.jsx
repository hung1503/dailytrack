import React from "react";
import "./class.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Link } from "react-router-dom";

export default function Class({classInfo}) {
  const [data, setData] = React.useState(classInfo);
  const handleDelete = (id) => {
    setData(data.filter((row) => row.id !== id));
  };
  console.log(data)

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
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
      field: "activity",
      headerName: "Activity",
      width: 400,
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
    <div className="classContainer">
      <h1>Class: {classInfo.className}</h1>
      Teacher: {classInfo.teacher.map((info) => <div key={info.id}><p>{info.firstName} {info.lastName}</p></div>)}
      <div className="classTable">
        <DataGrid
          rows={data.students}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
        />
      </div>
    </div>
  )
}
