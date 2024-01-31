import React, { useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap"
import { toast } from "react-toastify";
import axios from 'axios'
import base_url from "../api/bootapi";

const AddCourse = () => {
    useEffect(() => {
        document.title = "New Course"
    }, [])



    const [course, setCourses] = useState({
        id: '',// Initialize id as an empty string

    });

    //form handling function
    const handleForm = (e) => {
        console.log(course);
        postData(course)
        e.preventDefault();
    }

    //creating function to post data on server
    const postData = (data) => {
        data.id = parseInt(data.id); // Ensure it's a number
        axios.post(`${base_url}/courses`, data).then(
            (response) => {
                console.log(response)
                console.log("Success")
                toast.success("Course added", {
                    autoClose: 1300
                })

            },
            (error) => {
                console.log(error)
                console.log("Error")
                toast.error("Something went wrong!", {
                    autoClose: 1300
                })
            }
        )
    }


    return (
        <div style={{ margin: "10px" }}>
            <h1 style={{ textAlign: "center" }}>Fill New Courses</h1>
            <Form onSubmit={handleForm} >
                <FormGroup>
                    <label for="id" style={{ margin: "3px" }}>Course courseId</label>
                    <Input type="number" placeholder="Enter ID" name="id" courseId="id" onChange={(e) => {
                        setCourses({ ...course, id: e.target.value })
                    }}> </Input>
                </FormGroup>
                <FormGroup>
                    <label for="name" style={{ margin: "3px" }}>Course Name</label>
                    <Input type="text" placeholder="Enter Name" name="name" courseId="name" onChange={(e) => {
                        setCourses({ ...course, name: e.target.value })
                    }}> </Input>
                </FormGroup>
                <FormGroup>
                    <label for="description" style={{ margin: "3px" }}>Course Description</label>
                    <Input type="textarea" placeholder="Enter Description" name="description" courseId="description" onChange={(e) => {
                        setCourses({ ...course, description: e.target.value })
                    }}> </Input>
                </FormGroup>
                <FormGroup>
                    <label for="mentor" style={{ margin: "3px" }}>Mentor</label>
                    <Input type="text" placeholder="Enter Mentor" name="mentor" courseId="mentor" onChange={(e) => {
                        setCourses({ ...course, mentor: e.target.value })
                    }}> </Input>
                </FormGroup>
                <Container style={{ textAlign: "center" }}>
                    <Button color="success" type="submit" onSubmit="reset">
                        Save Course
                    </Button>
                    <Button color="danger" type="reset" style={{ marginLeft: "10px" }}>
                        Clear
                    </Button>

                </Container>
            </Form>
        </div>
    )
}

export default AddCourse;