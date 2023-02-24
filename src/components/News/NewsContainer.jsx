import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getNews } from "../../redux/NewsReducer";
import News from "./News";

const NewsContainer = (props) => {
	useEffect(() => {
		props.getNews();
	}, [props.news])

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