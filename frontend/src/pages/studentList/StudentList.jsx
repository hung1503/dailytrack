import React from "react";
import "./studentList.css";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

export default function StudentList({ students }) {
  const [data, setData] = React.useState(students);
  const [searchQuery, setSearchQuery] = React.useState("");
  console.log(students);
  const handleDelete = (id) => {
    console.log(id);
    setData(data.filter((row) => row.id !== id));
  };

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
      field: "fullName",
      headerName: "Full name",
      width: 150,
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
      width: 70,
    },

    {
      field: "email",
      headerName: "Email",
      width: 200,
      renderCell: (params) => {
        return <div>{params.row.email}</div>;
      },
    },
    {
      field: "phonenumber",
      headerName: "Phone number",
      width: 200,
      renderCell: (params) => {
        return (
          <div>
            Phone 1: {params.row.parentsInfo.phone1}
            <br />
            Phone 2: {params.row.parentsInfo.phone2}
          </div>
        );
      },
    },
    {
      field: "activities",
      headerName: "Activities",
      width: 130,
      renderCell: (params) => {
        return (
          <div>
            <Link to={"/students/" + params.row.id + "/activities"}>
              <button className="studentListEdit">See in details</button>
            </Link>
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
              <button className="studentListEdit">See profile</button>
            </Link>
          </div>
        );
      },
    },
  ];

  return (
    <div className="studentListContainer">
      <div className="studentListUp">
        <Box sx={{ "& > :not(style)": { m: 1 } }}>
          <FormControl variant="standard">
            <InputLabel htmlFor="input-with-icon-adornment">
              Search for student's first name
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
      />
    </div>
  );
}
