import React, { Component } from "react";
import data from "./../data/imdb_movies_data.json";

class Movies extends Component {
    state = {
        movies: [],
        timeStamp: "",
        currentPage: 1,
        pageSize: 10,
    };

    componentDidMount() {
        const { timeStamp, imdb_movies: movies } = data;
        this.setState({
            movies,
            timeStamp,
        });
    }

    render() {
        return <div>Movies go here</div>;
    }
}

export default Movies;
