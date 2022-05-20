import React from "react";
import { Link } from "react-router-dom";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import BookIcon from "@mui/icons-material/Book";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import "./home.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const Home = () => {
  return (
    <div className="homeContainer">
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <div className="homeItem">
              <Link to="/students" className="link">
                <a className="homeItem">
                  <ChildCareIcon className="homeIcon" />
                </a>
                <h2>Students</h2>
              </Link>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className="homeItem">
              <Link to="/classes" className="link">
                <a className="homeItem">
                  <BookIcon className="homeIcon" />
                </a>
                <h2>Classes</h2>
              </Link>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className="homeItem">
              <Link to="/teachers" className="link">
                <a className="homeItem">
                  <AccountBoxIcon className="homeIcon" />
                </a>
                <h2>Teachers</h2>
              </Link>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Home;
