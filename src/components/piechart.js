import React from "react";
import ChartistGraph from "react-chartist";
import { connect } from 'react-redux';

import {
  Card,
  Col,
} from "react-bootstrap";

const Pie = (props) => {
    const getGraphSeries = (obj , key) => {
        let scoreArr = []
        for (key in obj) {
            scoreArr.push(obj[key].score);
        }

        return scoreArr;
    }

    const getLabels = (obj , key) => {
        let labelArr = []
        for (key in obj) {
            labelArr.push(key);
        }

        return labelArr;
    }
    return (
      <>
          <Card>
            <Card.Header>
              <Card.Title as="h4">Election Pie Chart</Card.Title>
            </Card.Header>
            <Card.Body>
              <div
                className="ct-chart ct-perfect-fourth"
                id="chartPreferences"
              >
                <ChartistGraph
                  data={{
                    labels: getLabels(props.stateVal),
                    series: getGraphSeries(props.stateVal),
                  }}
                  type="Pie"
                />
              </div>
            </Card.Body>
          </Card>
      </>
    );
  }


  const mapStateToProps = state => {
      
    return {
    stateVal: state

  };
}
export default connect(mapStateToProps, null)(Pie);