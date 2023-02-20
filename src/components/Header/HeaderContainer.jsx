import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { deleteLoginData } from "../../redux/AuthReducer";

class HeaderContainer extends React.Component {
  render = () => {
    return <Header {...this.props} />
  }
}

let mapStateToProps = (state) => ({
  isAuth: state.Auth.isAuth,
  login: state.Auth.login,
  id: state.Auth.id,
  email: state.Auth.email,
});

export default connect(mapStateToProps, { deleteLoginData })(HeaderContainer);