import React, { Component } from "react";
import data from "./../data/imdb_movies_data.json";
import Accordion from "./common/Accordion";
import UIPagination from "./common/UIPagination";
import { paginate } from "../utils/paginate";

class Movies extends Component {
    state = {
        movies: [],
        timestamp: new Date(),
        currentPage: 1,
        pageSize: 10,
    };

    componentDidMount() {
        let { timestamp, imdb_movies: movies } = data;
        timestamp = new Date(timestamp);
        this.setState({
            movies,
            timestamp,
        });
    }

    handlePageChange = (event, value) => {
        this.setState({ currentPage: value });
    };

    render() {
        const {
            movies: allMovies,
            currentPage,
            pageSize,
            timestamp,
        } = this.state;
        const movies = paginate(allMovies, currentPage, pageSize);

        return (
            <div>
                <p>
                    Movie data was last retrieved on {timestamp.toDateString()}{" "}
                    at {timestamp.toLocaleTimeString()}
                </p>
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
