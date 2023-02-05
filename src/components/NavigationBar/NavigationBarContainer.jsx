import React from "react";
import { connect } from "react-redux";
import NavigationBar from "./NavigationBar";

class NavigationBarContainer extends React.Component {
    render() {
        return <NavigationBar {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        userID: state.Auth.id
    }
}

export default connect(mapStateToProps, { })(NavigationBarContainer);