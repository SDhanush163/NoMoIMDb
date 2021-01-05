import React, { Component } from "react";
import data from "./../data/imdb_movies_data.json";
import Accordion from "./common/Accordion";

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
        const { movies } = this.state;
        return (
            <div>
                <Accordion data={movies} />
            </div>
        );
    }
}

export default Movies;
