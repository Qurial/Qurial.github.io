import { connect } from "react-redux";
import { sendMessage, updateNewMessageText } from "../../../../redux/MessengerReducer";
import NewMessageField from "./NewMessageField";

let mapStateToProps = (state) => {
    return {
        newMessageText: state.MessengerPage.newMessageText,
        messages: state.MessengerPage.messages,
    }
}

export default connect(mapStateToProps, { updateNewMessageText, sendMessage, })(NewMessageField)