import React, { Component, useState } from "react";
import Grid from "components/Sidebar/grid.js";
import Pie from "components/Sidebar/piechart.js";
import Line from "components/Sidebar/Linechart.js";


class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        clicks: 50,
        clicks1:50,
        clicks2:50,
        clicks3:50,
        clicks4:50,
      };
    }
    onChange (event) {
      this.setState({ value: event.target.value })
    }
    IncrementItem = () => {
      this.setState({ clicks: this.state.clicks + 1 });
    }
    DecreaseItem = () => {
      this.setState({ clicks: this.state.clicks - 1 });
    }
    IncrementItem1 = () => {
      this.setState({ clicks1: this.state.clicks1 + 1 });
    }
    DecreaseItem1= () => {
      this.setState({ clicks1: this.state.clicks1 - 1 });
    }
    IncrementItem2 = () => {
      this.setState({ clicks2: this.state.clicks2 + 1 });
    }
    DecreaseItem2 = () => {
      this.setState({ clicks2: this.state.clicks2 - 1 });
    }
    IncrementItem3 = () => {
      this.setState({ clicks3: this.state.clicks3 + 1 });
    }
    DecreaseItem3 = () => {
      this.setState({ clicks3: this.state.clicks3 - 1 });
    }
    IncrementItem4= () => {
      this.setState({ clicks4: this.state.clicks4 + 1 });
    }
    DecreaseItem4 = () => {
      this.setState({ clicks4: this.state.clicks4 - 1 });
    }
        render() {
            return (
              <div>
                <Grid num={this.state.clicks} inc={this.IncrementItem} dec={this.DecreaseItem}
                num1={this.state.clicks1} inc1={this.IncrementItem1} dec1={this.DecreaseItem1}
                num2={this.state.clicks2} inc2={this.IncrementItem2} dec2={this.DecreaseItem2}
                num3={this.state.clicks3} inc3={this.IncrementItem3} dec3={this.DecreaseItem3}
                num4={this.state.clicks4} inc4={this.IncrementItem4} dec4={this.DecreaseItem4}
                />
                  <Line num={this.state.clicks} num1={this.state.clicks1} 
                  num2={this.state.clicks2} num3={this.state.clicks3} num4={this.state.clicks4}/>
                  <Pie num={this.state.clicks} num1={this.state.clicks1} 
                  num2={this.state.clicks2} num3={this.state.clicks3} num4={this.state.clicks4}/>
              </div>    
              );
         }
}

export default App;