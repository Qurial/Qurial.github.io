import React from "react";

class ProfileStatus extends React.Component {
    /*no longer used*/
    newStatus = React.createRef();
    isMyProfile = null;

    state = {
        editMode: false,
        status: '',
    }

    componentDidUpdate = () => {
        this.isMyProfile = +this.props.match.params.userId === this.props.id
        if ((this.state.status !== this.props.status) && !this.state.editMode) {
            this.setState({
                status: this.props.status
            })
        }
    }

    onStatusChange = () => {
        this.setState({
            status: this.newStatus.current.value
        })
    }

    activateEditMode = () => {
        if (this.isMyProfile) {
            this.setState({
                editMode: true
            })
        }
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        if (this.state.status !== this.props.status) {
            this.props.updateStatus(this.state.status)
        }
    }
    render() {
        return <>
            {(this.state.editMode)
                ? <div>
                    <input
                        type="text"
                        placeholder='your status'
                        onBlur={this.deactivateEditMode}
                        value={this.state.status}
                        autoFocus={true}
                        onChange={this.onStatusChange}
                        ref={this.newStatus}
                        maxLength={300} />
                </div>
                : <div>
                    <span
                        onDoubleClick={this.activateEditMode}
                        style={this.state.status
                            ? null
                            : { color: '#aaa', fontStyle: 'italic' }}>
                        {this.state.status || !this.isMyProfile ? this.state.status : 'write your status'}
                    </span>
                </div>
            }
        </>
    }
}

export default ProfileStatus;