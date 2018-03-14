import React from "react";
import Section from "./section";
import Stats from "../../stats.json";
import "./teams.css";

const Cards1 = props => (
    <div className="container">
        <div className={props.id}>
            <div className="row menu">
                <div className="panel panel-default col-md-3 col-sm-12 stats-style">
                    <div class="panel-heading">
                        Teams
                </div>
                    <a href="/cavs"><img className="logos" src="assets/images/cavs-logo.png" height="300px" alt="Cavs Stats" /><span className="logos">Cleveland Cavs</span> </a>
                    <hr />
                    <a href="/celtics"><img className="logos" src="assets/images/Celtics.png" height="300px" alt="Celtics Stats" /><span className="logos">Boston Celtics</span> </a>
                </div>

            <div className="panel panel-default col-md-3 col-sm-12 team-style">
                <div class="panel-heading">
                    Selected Team Stats
                </div> 
                    <br />
                        <ul>
                            <li> <strong>Team:</strong> {props.team}</li>
                        <li> <strong>City: {props.city}</strong></li>
                        <li> <strong>Record:</strong> {props.record}</li>
                        <li> <strong>Championships:</strong>{props.championships}</li>
                        <li> <strong>Coach:</strong>{props.coach}</li>
                        <li> <strong>Owner:</strong>{props.owner}</li>
                        <li> <strong>Arena:</strong>{props.arena}</li>
                        <li><strong> Mascots</strong>:{props.mascot}</li>
                        </ul>
            </div>
                <div className="panel panel-default col-md-3 col-sm-12 roster-style">
                <div class="panel-heading">
                    Team Roster
                </div>
                    <div className="col-6">
                        <br />
                    <div className="col-md-4 col-sm-12 ">
                    <img className="card" alt={props.Name1} src={props.roster.Image1} />
                            <span className="player">{props.roster.Name1}</span> 
                        </div>
                        <div className="col-md-4 col-sm-12">
                    <img className="card" alt={props.Name2} src={props.roster.Image2} />  
                            <span className="player">{props.roster.Name2}</span>
                            </div>
                            <div className="col-md-4 col-sm-12">
                    <img className="card" alt={props.Name3} src={props.roster.Image3} /> 
                            <span className="player">{props.roster.Name3}</span>  
                            </div>
                            <div className="col-md-4 col-sm-12">
                    <img className="card" alt={props.Name4} src={props.roster.Image4} /> 
                            <span className="player">{props.roster.Name4}</span>
                        </div>
                        <div className="col-md-4 col-sm-12">
                    <img className="card" alt={props.Name5} src={props.roster.Image5} /> 
                            <span className="player">{props.roster.Name5}</span>
                        </div>
                        <div className="col-md-4 col-sm-12">
                    <img className="card" alt={props.Name6} src={props.roster.Image6} /> 
                    <span className="player">{props.roster.Name6}</span>
                    </div>
                    </div>
                </div>
                <div className="panel panel-default col-md-3 col-sm-12 games-style">
                <div class="panel-heading">
                    Previous Games / Next Games
                </div>
                    <br />
                    <ul>
                        <span className="news-title"> Previous Games</span>
                        <li> <strong>Team:</strong> {props.previous.Opponent}</li>
                        <li> <strong>Date</strong>: {props.previous.Date}</li>
                        <li><strong> Score:</strong> {props.previous.Score}</li>
                        <span className="news-title"> Upcoming Games</span>
                      
                        <li> <strong>Team:</strong> {props.next.Opponent}</li>
                        <li> <strong>Date:</strong> {props.next.Date}</li>
                            
                    </ul>
                </div>
            </div>
        </div>
        <div className="container panel panel-default col-md-9 col-sm-12 news-style">
                <div class="panel-heading">
                    News 
                </div>
        <span className="news-title">
                <br /> {props.title1}
            </span>
            <br/>
            {props.article1} 
         <span className="news-title">
                <br /> {props.title2}
            </span>
            <br /> 
            {props.article2}
        <span className="news-title">
                <br /> {props.title3} 
        </span>
        <br />
        {props.article3}
        </div>
    </div>
);
export default Cards1;