import React, { Component } from "react";
import data from "./../data/imdb_movies_data.json";
import Accordion from "./common/Accordion";
import UIPagination from "./common/UIPagination";
import { paginate } from "../utils/paginate";

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

    handlePageChange = (event, value) => {
        this.setState({ currentPage: value });
    };

    render() {
        const { movies: allMovies, currentPage, pageSize } = this.state;
        const movies = paginate(allMovies, currentPage, pageSize);
        return (
            <div>
                <UIPagination
                    count={allMovies.length / pageSize}
                    page={currentPage}
                    onPageChange={this.handlePageChange}
                />
                <br />
                <Accordion data={movies} />
            </div>
        );
    }
}

export default Movies;
