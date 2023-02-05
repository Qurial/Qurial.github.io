import React from "react";
import { connect } from "react-redux";
import { unfollow, follow, getUsers } from "../../redux/FriendsReducer";
import Friends from './Friends'

class FriendsContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.pageSize, 1)
    }

    onPageChange = (pageNumber) => {
        this.props.getUsers(this.props.pageSize, pageNumber)
    }
    render = () => {
        return <Friends
            totalUsersCount={this.props.totalUsersCount}
            currentPage={this.props.currentPage}
            pageSize={this.props.pageSize}
            onPageChange={this.onPageChange}
            friends={this.props.friends}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            isFetching={this.props.isFetching}
            isFollowingInProgress={this.props.isFollowingInProgress}
        />
    }
}

let mapStateToProps = (state) => {
    return {
        friends: state.FriendsPage.friends,
        pageSize: state.FriendsPage.pageSize,
        totalUsersCount: state.FriendsPage.totalUsersCount,
        currentPage: state.FriendsPage.currentPage,
        isFetching: state.FriendsPage.isFetching,
        isFollowingInProgress: state.FriendsPage.isFollowingInProgress,
    }
}
export default connect(mapStateToProps,
    { unfollow, follow, getUsers })(FriendsContainer);