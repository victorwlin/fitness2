import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import FirebaseConfig from "./FirebaseConfig";
import Header from "./Header";
import Menu from "./Menu";
import Nutrition from "./Nutrition/Nutrition";
import Exercise from "./Exercise/Exercise";
import Tracking from "./Tracking/Tracking";

class App extends React.Component {    
    render() {
        return (
                <div className="ui container" style={{ marginTop: "10px" }}>
                    <BrowserRouter>
                        <div>
                            <FirebaseConfig />
                            <Header />
                            <Route path="/" exact component={Menu} />
                            <Route path="/nutrition" exact component={Nutrition} />
                            <Route path="/exercise" exact component={Exercise} />
                            <Route path="/tracking" exact component={Tracking} />
                        </div>
                    </BrowserRouter>
                </div>
        );
    }
}

export default App;