import React from "react";
import { Link } from "react-router-dom";

class Menu extends React.Component {
    render() {
        return (
            <div className="ui fluid three item menu">
                <Link to="/nutrition" className="disabled item">
                    <i className="utensils icon huge"></i>
                    Nutrition
                </Link>
                <Link to="/exercise" className="disabled item">
                    <i className="football ball icon huge"></i>
                    Exercise
                </Link>
                <Link to="/tracking" className="item">
                    <i className="weight icon huge"></i>
                    Tracking
                </Link>
            </div>
        );
    }
}

export default Menu;