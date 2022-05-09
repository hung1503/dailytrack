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

export default function TeacherList({ teachers }) {
  const [data, setData] = React.useState(teachers);
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
          return row.firstName
            .toLowerCase()
            .includes(searchQuery.toLowerCase());
        });

  const columns = [
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
      field: "class",
      headerName: "Class",
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
