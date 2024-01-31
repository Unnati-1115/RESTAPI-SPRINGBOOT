import React, { useState, useEffect } from "react";
import { Card, CardBody, CardTitle, CardText, Button, Container, Form, FormGroup, Label, Input } from "reactstrap";
import axios from 'axios';
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

const Course = ({ course, update }) => {
    const [showUpdateForm, setShowUpdateForm] = useState(false);
    const [updatedCourseData, setUpdatedCourseData] = useState({
        id: course.id,
        name: course.name,
        description: course.description,
        mentor: course.mentor,
    });
    const [isCourseChanged, setIsCourseChanged] = useState(false);

    useEffect(() => {
        const isDataChanged = Object.keys(updatedCourseData).some(key => updatedCourseData[key] !== course[key]);
        setIsCourseChanged(isDataChanged);
    }, [updatedCourseData, course]);

    const deleteCourse = (id) => {
        axios.delete(`${base_url}/courses/${id}`).then(
            (response) => {
                toast.success('Deleted Course', {
                    autoClose: 1300
                })
                update(id)
            },
            (error) => {
                toast.error('Something went wrong!', {
                    autoClose: 1300
                })
            }
        )
    }

    const toggleUpdateForm = () => {
        setShowUpdateForm(!showUpdateForm);
    }

    const updateCourseDetails = (id) => {
        if (isCourseChanged) {
            axios.put(`${base_url}/courses`, updatedCourseData)
                .then((response) => {
                    toast.success('Course updated successfully', {
                        autoClose: 1300
                    });
                    setShowUpdateForm(false); // Hide the form after successful update
                })
                .catch((error) => {
                    toast.error('Failed to update course');
                });
        } else {
            toast.info('No changes made to update');
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedCourseData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    return (
        <Card style={{ textAlign: "center", marginBottom: "12px" }}>
            <CardBody>
                <CardTitle style={{ fontWeight: "bold" }}>{course.name}</CardTitle>
                <CardText>{course.description}</CardText>
                <CardText style={{ fontStyle: "italic" }}>{course.mentor}</CardText>
                <Container >
                    <Button color="danger" onClick={() => deleteCourse(course.id)}>Delete</Button>
                    <Button color="warning" style={{ marginLeft: "10px" }} onClick={toggleUpdateForm}>Update</Button>
                </Container>

                {showUpdateForm && (
                    <Form style={{ marginTop: 2.5 + 'em' }}>
                        <FormGroup>
                            <Label for="name">Course Name</Label>
                            <Input type="text" name="name" id="name" value={updatedCourseData.name} onChange={handleInputChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="description">Course Description</Label>
                            <Input type="textarea" name="description" id="description" value={updatedCourseData.description} onChange={handleInputChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="mentor">Mentor</Label>
                            <Input type="text" name="mentor" id="mentor" value={updatedCourseData.mentor} onChange={handleInputChange} />
                        </FormGroup>

                        <Button color="primary" onClick={() => updateCourseDetails(course.id)}>Save Changes</Button>
                    </Form>
                )}
            </CardBody>
        </Card>
    )
}

export default Course;


//YOUTUBE VIDEO CODE
{/*
import React from "react";

import { Card, CardBody, CardTitle, CardText, CardFooter, Button, Container, CardSubtitle } from "reactstrap";
import axios from 'axios'
import base_url from "../api/bootapi";
import { toast } from "react-toastify";


const Course = ({ course, update }) => {

    const deleteCourse = (id) => {
        axios.delete(`${base_url}/courses/${id}`).then(
            (response) => {
                toast.success('Deleted Course')
                update(id)
            },
            (error) => {
                toast.error('Something went wrong!')
            }
        )
    }

    return (
        <Card style={{ textAlign: "center", marginBottom: "12px" }}>
            <CardBody>
                <CardSubtitle style={{ fontWeight: "bold" }}>
                    {course.name}
                </CardSubtitle>
                <CardText>
                    {course.description}
                </CardText>
                <CardText style={{ fontStyle: "italic" }}>
                    {course.mentor}
                </CardText>
                <CardText style={{ fontStyle: "italic" }}>
                    {course.id}
                </CardText>
                <Container>
                    <Button color="danger" onClick={() => {
                        deleteCourse(course.id);
                    }}>Delete</Button>
                    <Button color="warning" style={{ marginLeft: "10px" }}>Update</Button>
                </Container>
            </CardBody>
        </Card>
    )
}

export default Course;
*/
}