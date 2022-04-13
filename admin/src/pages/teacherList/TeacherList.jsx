import React from "react";
import "./teacherList.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Link } from "react-router-dom";
import { teacherRows } from "../../data";

export default function TeacherList() {
  const [data, setData] = React.useState(teacherRows);
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
          <div className="teacherList">
            <img src={params.row.avatar} className="teacherListImg" alt="" />
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
    },
    {
      field: "phonenumber",
      headerName: "Phone number",
      width: 200,
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="teacherList">
            <Link to={"/teachers/" + params.row.id}>
              <button className="teacherListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              onClick={() => handleDelete(params.row.id)}
              className="teacherListDelete"
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="teacherListContainer">
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
