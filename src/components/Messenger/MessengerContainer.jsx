import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import Messenger from "./Messenger";

class MessengerContainer extends React.Component {
    render() {
        return <Messenger
            dialogs={this.props.dialogs} />
    }
}

let mapStateToProps = (state) => {
    return {
        dialogs: state.MessengerPage.dialogs,
    }
}

export default compose(
    connect(mapStateToProps, {}),
    withAuthRedirect,
)(MessengerContainer)