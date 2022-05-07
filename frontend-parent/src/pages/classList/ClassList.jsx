import React from "react";
import "./classList.css";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

export default function ClassList({ classes }) {
  const [data, setData] = React.useState(classes);
  const [searchQuery, setSearchQuery] = React.useState("");

  console.log(data);
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const foundData =
    searchQuery === ""
      ? data
      : data.filter((row) => {
          return row.firstName
            .toLowerCase()
            .includes(searchQuery.toLowerCase());
        });

  const columns = [
    {
      field: "class",
      headerName: "Class name",
      width: 110,
      renderCell: (params) => {
        return <div className="classList">{params.row.class}</div>;
      },
    },
    {
      field: "teacher",
      headerName: "Teacher",
      width: 150,
      renderCell: (params) => {
        return (
          <ul className="classListTeacher">
            {params.row.teachers.map((teacher) => (
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
            <Link to={"/classes/" + params.row._id}>
              <button className="classListEdit">See details</button>
            </Link>
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
        </Box>
      </div>
      <DataGrid
        rows={foundData}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        getRowId={(row) => row._id}
      />
    </div>
  );
}
