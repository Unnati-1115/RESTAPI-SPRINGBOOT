package com.springrestapi.springrestapi.controller;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springrestapi.springrestapi.entities.Course;
import com.springrestapi.springrestapi.services.CourseService;
@CrossOrigin(origins = "http://localhost:3001")

@RestController
public class MyController {
	@Autowired
	private CourseService courseSer;
	
	//creating home page
	@GetMapping("/home")
	public String home() {
		return "Welcome to this Application";
	}
	
	//get all the courses
	@GetMapping("/courses")
	public List<Course> getCourses(){
		return this.courseSer.getCourses();
	}
	
	//get course of particular id
	@GetMapping("/courses/{courseId}")
	public Course getCourse(@PathVariable String courseId) {
		return this.courseSer.getCourse(Long.parseLong(courseId));
	}
	
	//adding new course
	@PostMapping("/courses")
	public Course addCourse(@RequestBody Course course){
		return this.courseSer.addCourse(course);
	}
	
	//updating the course
	@PutMapping("/courses")
	public Course updateCourse(@RequestBody Course course) {
		return this.courseSer.updateCourse(course);
	}
	
	//deleting course
	@DeleteMapping("/courses/{courseId}")
	public ResponseEntity<HttpStatus> deleteCourse(@PathVariable String courseId){
		try {
			this.courseSer.deleteCourse(Long.parseLong(courseId));
			return new ResponseEntity<>(HttpStatus.OK);
			
		}
		catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
