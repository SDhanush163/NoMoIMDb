import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import NavBar from "./components/NavBar";
import Movies from "./components/Movies";
import Dashboard from "./components/Dashboard";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={(props) => <Dashboard {...props} />}
                    />
                    <Route
                        exact
                        path="/movies"
                        render={(props) => <Movies {...props} />}
                    />
                </Switch>
            </React.Fragment>
        );
    }
}

export default App;
