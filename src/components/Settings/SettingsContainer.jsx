import React from "react";
import { connect } from "react-redux";
import { updateProfileImage } from "../../redux/SettingsReducer";
import Settings from "./Settings";

const SettingsContainer = (props) => {
  return (
    <Settings {...props} />
  )
}

let mapStateToProps = (state) => {
  return {

  }
}

export default connect(mapStateToProps, { updateProfileImage })(SettingsContainer);