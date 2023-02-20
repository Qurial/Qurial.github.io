import React from "react";
import { connect } from "react-redux";
import Login from "./Login";
import { postLoginData } from "../../redux/AuthReducer";
import { Navigate } from "react-router-dom";

class LoginContainer extends React.Component {
    render() {
        if(this.props.isAuth) {
            return <Navigate to={`/profile/${this.props.id}`} />
        }
        return <Login {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.Auth.isAuth,
        id: state.Auth.id,
        captchaUrl: state.Auth.captchaUrl
    }
}
export default connect(mapStateToProps, { postLoginData })(LoginContainer)