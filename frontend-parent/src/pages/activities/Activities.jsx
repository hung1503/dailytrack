import React from "react";
import "./activities.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addActivity } from "../../reducer/activityReducer";

export default function Activities({ oneStudentData }) {
  const [data, setData] = React.useState(oneStudentData.activities);
  const [date, setDate] = React.useState("");
  const handleDelete = (id) => {
    console.log(id);
    setData(data.filter((row) => row._id !== id));
  };
  const dispatch = useDispatch();

  const handleNewDate = (e) => {
    dispatch(addActivity({ date: date, studentId: oneStudentData.id }));
    setDate("");
  };

  const columns = [
    {
      field: "date",
      headerName: "Date",
      width: 90,
      renderCell: (params) => {
        return <div>{params.row.date}</div>;
      },
    },
    {
      field: "routine",
      headerName: "Daily activities",
      width: 400,
      sortable: false,
      renderCell: (params) => {
        return (
          <div className="activityList">
            {params.row.routine.map((info) => {
              return (
                <div key={info._id}>
                  <p>
                    {info.time} - {info.activity} /{" "}
                  </p>
                </div>
              );
            })}
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
          <div className="activityList">
            <Link to={"/activities/" + params.row.date}>
              <button className="activityListEdit">See details</button>
            </Link>
          </div>
        );
      },
    },
  ];

  return (
    <div className="activityListContainer">
      <div className="activityListUp">
        <h1 className="activityTitle">
          {oneStudentData.firstName} {oneStudentData.lastName} - Class:{" "}
          {oneStudentData.class}
        </h1>
      </div>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        getRowId={(row) => row._id}
      />
    </div>
  );
}
