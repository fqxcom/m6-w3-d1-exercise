import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import AppNavbar from './Navbar';

class Home extends Component {
  render() {
    return (
      <div>
        <Container fluid>
          <h1 className="d-flex justify-content-center m-5">Animation Components</h1>
        </Container>
      </div>
    )
  }
}

export default Home;