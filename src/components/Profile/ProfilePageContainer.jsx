import React from "react";
import { connect } from "react-redux";
import ProfilePage from "./ProfilePage";
import { getUserProfile } from "../../redux/ProfileReducer";
import { useParams } from "react-router-dom";
import { compose } from "redux";

class ProfilePageContainer extends React.Component {

    previousUser = null;
    componentDidMount() {
        this.props.getUserProfile(this.props.match.params.userId);
        this.previousUser = this.props.match.params.userId
    }

    componentDidUpdate() {
        if(this.props.match.params.userId !== this.previousUser) {
            this.componentDidMount();
        }
    }

    onPageChange = () => {
        this.props.getUserProfile(this.props.match.params.userId);
    }

    render = () => {
        return <ProfilePage {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.ProfilePage.profile,
    }
}

let withRouter = (Child) => {
    return (props) => {
        const match = { params: useParams() };
        return <Child {...props} match={match} />
    }
}

export default compose(
    connect(mapStateToProps,{ getUserProfile }),
    withRouter,
)(ProfilePageContainer)