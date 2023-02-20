import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { compose } from "redux";
import { getStatus, updateStatus, setStatus } from "../../../../redux/ProfileReducer";
import ProfileStatusHooks from "./ProfileStatusHooks";

class ProfileStatusContainer extends React.Component {
  // no longer used
  previousUser = null;
  componentDidMount() {
    this.props.getStatus(this.props.match.params.userId);
    this.previousUser = this.props.match.params.userId;
  }

  componentDidUpdate() {
    if (this.props.match.params.userId !== this.previousUser) {
      this.componentDidMount();
    }
  }

  onPageChange = () => {
    this.props.getStatus(this.props.match.params.userId);
  }

  render() {
    return <ProfileStatusHooks {...this.props} />
  }
}

let mapStateToProps = (state) => {
  return {
    status: state.ProfilePage.status,
    id: state.Auth.id,
  }
}

let withRouter = (Child) => {
  return (props) => {
    const match = { params: useParams() };
    return <Child {...props} match={match} />
  }
}

export default compose(
  connect(mapStateToProps, { getStatus, updateStatus, setStatus }),
  withRouter,
)(ProfileStatusContainer)