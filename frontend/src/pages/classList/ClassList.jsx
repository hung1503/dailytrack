import React from "react";
import "./classList.css";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { classRows } from "../../data";

export default function ClassList() {
  const [data, setData] = React.useState(classRows);
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
      field: "className",
      headerName: "Class name",
      width: 110,
      renderCell: (params) => {
        return <div className="classList">{params.row.className}</div>;
      },
    },
    {
      field: "teacher",
      headerName: "Teacher",
      width: 150,
      renderCell: (params) => {
        return (
          <ul className="classListTeacher">
            {params.row.teacher.map((teacher) => (
              <li key={teacher.id} className="classListTeacher">
                {teacher.firstName} {teacher.lastName}
              </li>
            ))}
          </ul>
        );
      },
    },
    {
      field: "students",
      headerName: "Students",
      width: 110,
      renderCell: (params) => {
        return <div>{params.row.students.length}</div>;
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="classList">
            <Link to={"/classes/" + params.row.id}>
              <button className="classListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              onClick={() => handleDelete(params.row.id)}
              className="classListDelete"
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="classListContainer">
      <div className="classListUp">
        <Box sx={{ "& > :not(style)": { m: 1 } }}>
          <FormControl variant="standard">
            <InputLabel htmlFor="input-with-icon-adornment">
              Search for class
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
          <Link to="/newClass">
            <button className="classAddBtn">Add Class</button>
          </Link>
        </Box>
      </div>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
      />
    </div>
  );
}
