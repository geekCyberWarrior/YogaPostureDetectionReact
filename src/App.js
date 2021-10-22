import React, { Component } from "react";
import {
    Route,
    Switch,
    BrowserRouter,
} from "react-router-dom";

import "./App.css";
import YoutubeEmbed from "./components/YoutubeEmbed";
import Home from "./pages/Home/index";
import PerformAsana from "./pages/PerformAsana/PerformAsana";
import YogaTutorials from "./pages/YogaTutorials/index";
import { AuthProvider } from "./auth/AuthContext";
import RegisterNew from "./pages/Register";
import LoginNew from "./pages/Login";

class App extends Component {
    render() {
        return (
            <AuthProvider>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={RegisterNew} />
                        <Route exact path="/sign-in" component={LoginNew} />
                        <Route exact path="/home-page" component={Home} />
                        <Route
                            exact
                            path="/yoga-tutorials"
                            component={YogaTutorials}
                        />
                        <Route
                            exact
                            path="/yoga-tutorials/:embedId"
                            component={YoutubeEmbed}
                        />
                        <Route
                            exact
                            path="/perform-asana"
                            component={PerformAsana}
                        />
                        {/* </div>
                </div>
                <Route exact path="/home-page" component={Home} /> */}
                    </Switch>
                </BrowserRouter>
            </AuthProvider>
        );
    }
}

export default App;
