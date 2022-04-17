import React from 'react'
import "./activities.css"
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

export default function Activities({activitiesInfo}) {
  const [data, setData] = React.useState(activitiesInfo);
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
          <div className="activityList">
            <img src={params.row.avatar} className="activityListImg" alt="" />
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
          <div className="activityList">
            <Link to={"/activities/" + params.row.id}>
              <button className="activityListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              onClick={() => handleDelete(params.row.id)}
              className="activityListDelete"
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="activityListContainer">
      <div className="activityListUp">
        <Box sx={{ "& > :not(style)": { m: 1 } }}>
          <FormControl variant="standard">
            <InputLabel htmlFor="input-with-icon-adornment">
              Search for activity's first name
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
          <Link to="/newactivity">
            <button className="activityAddBtn">Add activity</button>
          </Link>
        </Box>
      </div>
      <DataGrid
        rows={foundData}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
