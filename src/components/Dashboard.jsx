import React, { Component } from "react";
import data from "../data/imdb_movie_analysis_data.json";

class DashBoard extends Component {
    state = {
        data: [],
    };
    componentDidMount() {
        this.setState({
            data,
        });
    }
    render() {
        return <div>This is the dashboard</div>;
    }
}

export default DashBoard;
