import React from "react";
import { connect } from "react-redux";
import { getNews } from "../../redux/NewsReducer";
import News from "./News";

const NewsContainer = (props) => {

    let date = new Date('2023-02-23T17:55:00Z')
    console.log(date.getDate())

    return (
        <News {...props} />
    )
}

let mapStateToProps = (state) => {
    return {
        news: state.NewsPage.news,
    }
}

export default connect(mapStateToProps, { getNews })(NewsContainer)