import React from "react";
import ChartistGraph from "react-chartist";
import { connect } from 'react-redux';

import {
    Card,
} from "react-bootstrap";

const Line = (props) => {
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

            <Card>
                <Card.Header>
                    <Card.Title as="h4">Election Line Chart</Card.Title>
                </Card.Header>
                <Card.Body>
                    <div className="ct-chart" id="chartHours">

                        <ChartistGraph
                            data={{
                                labels: getLabels(props.stateVal),
                                series: [getGraphSeries(props.stateVal)],
                            }}

                            type="Line"
                            options={{
                                low: 0,
                                high: 100,
                                showArea: false,
                                height: "245px",
                                axisX: {
                                    showGrid: false,
                                },
                                lineSmooth: true,
                                showLine: true,
                                showPoint: true,
                                fullWidth: true,
                                chartPadding: {
                                    right: 50,
                                },
                            }}
                            responsiveOptions={[
                                [
                                    "screen and (max-width: 640px)",
                                    {
                                        axisX: {
                                            labelInterpolationFnc: function (value) {
                                                return value[0];
                                            },
                                        },
                                    },
                                ],
                            ]}

                        />

                    </div>
                </Card.Body>
            </Card>

        );

    }

const mapStateToProps = state => {

    return {
        stateVal: state
    };
}
export default connect(mapStateToProps, null)(Line);