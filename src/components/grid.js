import React from "react";
import { connect } from 'react-redux';
import { incrementCount, decrementCount} from '../redux/actions/actions';
import {
  Card,
  Table,
  Col,
} from "react-bootstrap";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: this.props.employees,
        };
    }
    render() {
        return (
        <Col md="12">
          <Card className="strpied-tabled-with-hover">
            <Card.Header>
              <Card.Title as="h4">Election Status</Card.Title>
            </Card.Header>
            <Card.Body className="table-full-width table-responsive px-0">
              <Table className="table-hover table-striped">
                <thead>
                  <tr>
                    <th className="border-0">Vote</th>
                    <th className="border-0">Candidate Name</th>
                    <th className="border-0">Score</th>
                  </tr>
                </thead>
                <tbody>
                    {
                    this.props.employees.map((item) => {
                        return(
                        <tr key={item.id}>
                          
                            <>
                            <button><i className="fa fa-thumbs-up text-info" aria-hidden="true" onClick={() => this.props.onIncrement(item.name)} ></i></button>
                            <button><i className="fa fa-thumbs-down text-danger" aria-hidden="true" onClick={() => this.props.onDecrement(item.name)} ></i></button>
                            </>
                            <td>{item.name}</td>
                            <td>{this.props.stateVal[item.name].score}</td>
                        </tr>
                        );
                    })
                    }
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
);
                }
            }

 const mapStateToProps = state => {
      
      return {employees : [{ id: 1, name: 'Binod', score: 30 },
      { id: 2, name: 'Amit', score: 30 },
      { id: 3, name: 'Suman', score: 30 },
      { id: 4, name: 'Modi', score: 30 },
      { id:5, name: 'Sah', score: 30}],

      stateVal: state

    };
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      onIncrement: (name) => {
        dispatch(incrementCount(name))
      },
      onDecrement: (name) => {
        dispatch(decrementCount(name))
      },
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(Home)