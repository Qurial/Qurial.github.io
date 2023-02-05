import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { compose } from "redux";
import { getStatus, updateStatus, setStatus } from "../../../../redux/ProfileReducer";
import ProfileStatus from "./ProfileStatus";

class ProfileStatusContainer extends React.Component {

    previousUser = null;
    componentDidMount() {
        this.props.getStatus(this.props.match.params.userId);
        this.previousUser = this.props.match.params.userId;
    }

    componentDidUpdate() {
        if(this.props.match.params.userId !== this.previousUser) {
            this.componentDidMount();
        }
    }

    onPageChange = () => {
        this.props.getStatus(this.props.match.params.userId);
    }

    render() {
        return <ProfileStatus {...this.props} />
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