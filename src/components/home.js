import React from "react";
import { Container, Button, Jumbotron } from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';
import { useEffect } from "react";
const Home = () => {

    useEffect(() => {
        document.title = "Courses Application"
    }, [])

    const handle = () => {
        toast("This is my first message", {
            autoClose: 1300
        });
    };

    return (

        <div style={{ textAlign: 'center', background: "#edccca" }}>
            <h1 style={{ marginBottom: '25px', padding: "15px" }}>Fetching SpringBoot Api</h1>
            <Container style={{ paddingBottom: "20px" }}>
                <Button outline color="primary" onClick={handle}>React App</Button>
            </Container>
        </div>
    );
};

export default Home;