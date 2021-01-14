import React, { Component } from "react";
import data from "../data/imdb_movie_analysis_data.json";

class DashBoard extends Component {
    state = {
        data: [],
    };
    componentDidMount() {
        document.title = "NoMoIMDb - Home";
        this.setState({
            data,
        });
    }

    render() {
        return <div>Dashboard goes here</div>;
    }
}

export default DashBoard;
