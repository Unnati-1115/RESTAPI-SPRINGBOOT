import logo from './logo.svg';
import './App.css';
import { Button, Container, Row, Col, Card, CardBody } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import Home from "./components/home"
import Course from './components/Course';
import AllCourses from './components/AllCourses';
import AddCourse from './components/AddCourses';
import Menus from './components/Menus';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom"

function App() {

  return (
    <div>
      <Router>

        <ToastContainer />
        <Card style={{ marginBottom: "15px" }}>
          <CardBody style={{ background: "#e6e0d1" }}>
            <h1 style={{ textAlign: "center", margin: "15px" }}>Welcome to Courses Application</h1>
          </CardBody>
        </Card>
        <Container>
          <Row>
            <Col md="4">
              <Menus />
            </Col>
            <Col md="8" >
              <Routes>
                <Route path='/' Component={Home} />
                <Route path='/add-course' Component={AddCourse} exact />
                <Route path='/view-courses' Component={AllCourses} exact />
              </Routes>
            </Col>
          </Row>
        </Container>

      </Router>
    </div >
  );
}

export default App;
