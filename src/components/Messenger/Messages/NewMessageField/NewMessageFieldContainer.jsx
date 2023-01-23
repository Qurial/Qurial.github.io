import { connect } from "react-redux";
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from "../../../../redux/MessengerReducer";
import NewMessageField from "./NewMessageField";

let mapStateToProps = (state) => {
    return {
        newMessageText: state.MessengerPage.newMessageText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageTextActionCreator(text));
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        },
    }
}

const NewMessageFieldContainer = connect(mapStateToProps, mapDispatchToProps)(NewMessageField)

export default NewMessageFieldContainer;