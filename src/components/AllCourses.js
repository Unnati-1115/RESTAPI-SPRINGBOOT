import { useState, useEffect } from "react";
import React from "react";
import Course from "./Course";
import axios from 'axios'
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

const AllCourses = () => {
    const [courses, setCourses] = useState([

    ]);
    useEffect(() => {
        document.title = "All Courses"
        fetchcourses();
    }, [])


    //Function to call server
    const fetchcourses = () => {
        axios.get(`${base_url}/courses`).then(
            (response) => {
                //success
                //console.log(response)
                console.log(response.data)
                toast.success("Courses Loaded", {
                    toastId: 'success1',
                    autoClose: 1300
                })
                setCourses(response.data)
            },
            (error) => {
                //for error
                console.log(error)
                toast.error("Server Error", {
                    autoClose: 1300
                });
            }
        )
    }

    //updating deleted course
    const removeCourse = (id) => {
        setCourses(courses.filter((c) => c.id != id))
    }


    return (
        <div style={{ margin: "10px" }}>
            <h1>All Courses</h1>
            <p>Here are all the courses in the database: </p>
            {
                courses.length > 0 ? courses.map((item) => (<Course key={item.id} course={item} update={removeCourse} />)) : "No Courses"
            }
        </div>
    );
};

export default AllCourses;