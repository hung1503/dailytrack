import React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { connect } from "react-redux";

const Notification = (props) => {
  if (!props.notification) {
    return null;
  }

  return (
    <div>
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert severity={props.notification.color}>
          {props.notification.message}
        </Alert>
      </Stack>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    notification: state.notification,
  };
};

export default connect(mapStateToProps)(Notification);
