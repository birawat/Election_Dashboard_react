import React from "react";
import Grid from "components/grid";
import Pie from "components/piechart.js";
import Line from "components/Linechart.js";

const Dashboard = () => {
    return (
      
       <div>
          <Grid />
          <div className="row">
          <div className="col-md-8">
          <Line />
          </div>
          <div className="col-md-4">
          <Pie />
          </div>
          </div>
          </div>
    );
  }

export default Dashboard;