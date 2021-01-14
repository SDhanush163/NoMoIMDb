import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import NavBar from "./components/NavBar";
import Movies from "./components/Movies";
import Dashboard from "./components/Dashboard";
import NotFound from "./components/NotFound";

class App extends Component {
    state = {
        baseURL: "/NoMoIMDb",
    };
    render() {
        const { baseURL } = this.state;
        return (
            <React.Fragment>
                <NavBar baseURL={baseURL} />
                <main className="container">
                    <Switch>
                        <Route
                            exact
                            path={`${baseURL}/`}
                            render={(props) => <Dashboard {...props} />}
                        />
                        <Route
                            exact
                            path={`${baseURL}/movies`}
                            render={(props) => <Movies {...props} />}
                        />
                        <Route
                            path={`${baseURL}/not-found`}
                            component={NotFound}
                        />
                        <Redirect to={`${baseURL}/not-found`} />
                    </Switch>
                </main>
            </React.Fragment>
        );
    }
}

export default App;
