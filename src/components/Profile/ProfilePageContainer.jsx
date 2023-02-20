import React from "react";
import { connect } from "react-redux";
import ProfilePage from "./ProfilePage";
import { getUserProfile, setIsOwner, getStatus, updateStatus, setStatus, updateUserProfile } from "../../redux/ProfileReducer";
import { Navigate, useParams } from "react-router-dom";
import { compose } from "redux";

class ProfilePageContainer extends React.Component {

  renderComponent() {
    this.props.setIsOwner(this.props.isOwner);
    this.props.getUserProfile(this.props.match.params.userId);
    this.props.getStatus(this.props.match.params.userId);
  }

  componentDidMount() {
    this.renderComponent();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.renderComponent();
    }
  }

  render = () => {
    return <ProfilePage
      getStatus={this.props.getStatus}
      isOwner={this.props.isOwner}
      profile={this.props.profile}
      setStatus={this.props.setStatus}
      status={this.props.status}
      updateStatus={this.props.updateStatus}
      updateUserProfile={this.props.updateUserProfile}
    />
  }
}

let mapStateToProps = (state, props) => {
  return {
    profile: state.ProfilePage.profile,
    status: state.ProfilePage.status,
    isOwner: +props.match.params.userId === state.Auth.id
  }
}

let withRouter = (Child) => {
  return (props) => {
    const match = { params: useParams() };
    if (!+match.params.userId) {
      return <Navigate to={'/login'} />
    }
    return <Child {...props} match={match} />
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, { getUserProfile, setIsOwner, getStatus, updateStatus, setStatus, updateUserProfile }),
)(ProfilePageContainer)