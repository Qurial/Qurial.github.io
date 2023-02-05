import React from "react";
import { connect } from "react-redux";
import Login from "./Login";
import { postLoginData } from "../../redux/AuthReducer";

class LoginContainer extends React.Component {
    render() {
        return <Login {...this.props} />
    }
}
let mapStateToProps = () => {
    return {

    }
}
export default connect(mapStateToProps, { postLoginData })(LoginContainer)