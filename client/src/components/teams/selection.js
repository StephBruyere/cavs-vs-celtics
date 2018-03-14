import React from "react";
import Section from "./section";
import Stats from "../../stats.json";
import "./teams.css";
import { Link } from "react-router-dom";


const Selection = props => (
    <div className="card">

        <div className="panel panel-default col-md-3 col-md-12 colsidebar">
            <div class="panel-heading">
                Teams
                </div>    
            <a href="/cavs"><img className="logos" src="assets/images/cavs-logo.png" height="300px" alt="Cavs Stats" /> </a>
            <span className="logos"><div className={window.location.pathname === "/cavs" ? "active" : ""}>
                <Link to="/cavs"> Cleveland Cavs</Link> </div>              
                <hr/>    
                <a href="/celtics"><img className="logos" src="assets/images/Celtics.png" height="300px" alt="Celtics Stats" /> </a>
            <div className={window.location.pathname === "/cavs" ? "active" : ""}>
                "<Link to="/cavs">Boston Celtics</Link> </div> </span>                  
        </div>
    </div>
);
export default Selection;