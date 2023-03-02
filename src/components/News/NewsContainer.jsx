import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { compose } from "redux";
import { getNews, setNews, setSearchSafetyMode } from "../../redux/NewsReducer";
import News from "./News";

const NewsContainer = (props) => {
    const [request, setRequest] = useState({});
    const navigate = useNavigate()
    useEffect(() => {
        
        let newRequest = props.match.params;
        console.log(newRequest.query)
        debugger
        if(!newRequest.query && props.news !== null) {
            props.setNews(null)
        }
        if (newRequest.query
            && (request.query !== newRequest.query
                || request.pageNumber !== newRequest.pageNumber)) {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            newRequest.pageNumber = newRequest.pageNumber ? newRequest.pageNumber : 1
            newRequest.safeSearch = props.searchSafetyMode
            setRequest(newRequest)
            props.getNews(newRequest);
        }
    }, [props, request])

    const printNews = (req) => {
        navigate(`/news/${req.query}/${req.pageNumber}`)
    }
    return (
        <News {...props}
            setRequest={setRequest}
            request={request}
            printNews={printNews} />
    )
}

let mapStateToProps = (state) => {
    return {
        news: state.NewsPage.news,
        state: state,
        searchSafetyMode: state.NewsPage.searchSafetyMode
    }
}

let withRouter = (Child) => {
    return (props) => {
        const match = { params: useParams() };
        return <Child {...props} match={match} />
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, { getNews, setNews, setSearchSafetyMode })
)(NewsContainer)