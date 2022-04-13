import React from "react";
import "./studentList.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Link } from "react-router-dom";
import { studentRows } from "../../data";

export default function StudentList() {
  const [data, setData] = React.useState(studentRows);
  const handleDelete = (id) => {
    setData(data.filter((row) => row.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "fullName",
      headerName: "Full name",
      width: 130,
      sortable: false,
      renderCell: (params) => {
        return (
          <div className="studentList">
            <img src={params.row.avatar} className="studentListImg" alt="" />
            {params.row.firstName} {params.row.lastName}
          </div>
        );
      },
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 90,
    },

    {
      field: "email",
      headerName: "Email",
      width: 200,
      renderCell: (params) => {
        console.log(params.row);
        return <div>{params.row.parentsInfo.email}</div>;
      },
    },
    {
      field: "phonenumber",
      headerName: "Phone number",
      width: 200,
      renderCell: (params) => {
        console.log(params.row);
        return (
          <div>
            Phone 1:{params.row.parentsInfo.phone1}
            <br />
            Phone 2:{params.row.parentsInfo.phone2}
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
          <div className="studentList">
            <Link to={"/students/" + params.row.id}>
              <button className="studentListEdit">Edit</button>
            </Link>
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
    <div className="studentListContainer">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
