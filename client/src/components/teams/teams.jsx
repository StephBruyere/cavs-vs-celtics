import "./teams.css";
import Stats from "../../stats.json";
import Section from "./section";
import Cards1 from "./cards";
import Selection from "./selection";
import React, { Component } from "react";

class Teams extends Component {
  state = {
    Stats
    }

    remove = id => {
        const stats = this.state.Stats.filter(stats => Stats.id !== id);
        this.setState({ stats });
    };

  render() {
      return (

         
      <Section>
        {this.state.Stats.map(
          Stats => (
              <Cards1
                  remove={this.remove}
                  id={Stats.id}
                  team={Stats.TeamName}
                  city={Stats.City}
                  record={Stats.Record2017}
                  championships={Stats.Championships}
                  coach={Stats.HeadCoach}
                  arena={Stats.Arena}
                  owner={Stats.Owner}
                  mascot={Stats.Mascots}
                  roster={Stats.Roster}
                  previous={Stats.PreviousGame}
                  next={Stats.NextGame}
                  title1={Stats.News[0].Title}
                  article1={Stats.News[0].Article} 
                  title2={Stats.News[1].Title}
                  article2={Stats.News[1].Article} 
                  title3={Stats.News[2].Title}
                  article3={Stats.News[2].Article} 
              />
                ))}
      </Section>
    );
  }
}
export default Teams;
