import React from "react";
import { Link } from "react-router-dom";

import GoogleAuth from "./GoogleAuth";

const Header = () => {
    return (
        <div className="ui labeled icon menu">
            <Link to="/" className="item">
                <i className="home icon"></i>
                Home
            </Link>
            <Link to="/nutrition" className="disabled item">
                <i className="utensils icon"></i>
                Nutrition
            </Link>
            <Link to="/exercise" className="disabled item">
                <i className="football ball icon"></i>
                Exercise
            </Link>
            <Link to="/tracking" className="item">
                <i className="weight icon"></i>
                Tracking
            </Link>
            <div className="right item">
                <GoogleAuth />
            </div>
        </div>
    );
};

export default Header;