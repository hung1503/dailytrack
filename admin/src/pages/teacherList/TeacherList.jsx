import React from "react";
import "./teacherList.css";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { teacherRows } from "../../data";

export default function TeacherList() {
  const [data, setData] = React.useState(teacherRows);
  const [searchQuery, setSearchQuery] = React.useState("");
  const handleDelete = (id) => {
    setData(data.filter((row) => row.id !== id));
  };
  
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const foundData =
    searchQuery === ""
      ? data
      : data.filter((row) => {
          return (
          (row.firstName).toLowerCase().includes(searchQuery.toLowerCase())
      )
    });

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "fullName",
      headerName: "Full name",
      width: 200,
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
      width: 70,
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
      <div className="teacherListUp">
        <Box sx={{ "& > :not(style)": { m: 1 } }}>
          <FormControl variant="standard">
            <InputLabel htmlFor="input-with-icon-adornment">
              Search for teacher's first name
            </InputLabel>
            <Input
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              }
              onChange={handleSearch}
            />
          </FormControl>
          <Link to="/newTeacher">
            <button className="teacherAddBtn">Add teacher</button>
          </Link>
        </Box>
      </div>
      <DataGrid
        rows={foundData}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
      />
    </div>
  );
}
