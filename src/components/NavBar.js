import React from "react";
import '../style/App.css';

const NavBar = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="#logo" >
                <img id="logo" src="logo.png" className="d-inline-block align-top logo" alt="Wise Emotions" loading="lazy" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li id="users" className="nav-item active">
                        <a className="nav-link" href="#users">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li id="menu" className="nav-item">
                        <a className="nav-link" href="#menu">Menu</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
