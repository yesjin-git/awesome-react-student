import React, {Component} from "react"
import {Link} from "react-router-dom"
import './Navbar.css'

export default class Navbar extends Component {
    render() {
        return (
            <div className="App">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark-trans ">
                    <a className="navbar-brand logo" href="#">YOUFLIX</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/Search">Search</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}