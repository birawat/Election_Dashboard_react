import React,{Component} from "react";
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
                    this.props.employees.map((item, i) => {
                        return(
                        <tr key={item.id}>
                          
                            <>
                            <button><i className="fa fa-thumbs-up text-info" aria-hidden="true" onClick={() => this.props.incrementCount(item.name)} ></i></button>
                            <button><i className="fa fa-thumbs-down text-danger" aria-hidden="true" onClick={() => this.props.decrementCount(i)} ></i></button>
                            </>
                            <td>{item.name}</td>
                            <td>{item.score}</td>
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
      
      return {employees : [{ id: 1, name: 'Binod', score: 0 },
      { id: 2, name: 'Amit', score: 0 },
      { id: 3, name: 'Suman', score: 0 },
      { id: 4, name: 'Modi', score: 50 },
      { id:5, name: 'Sah', score: 0}]};
  }
  
  const mapDispatchToProps = () => {
    return {
      incrementCount,
      decrementCount
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(Home)