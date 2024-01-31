package com.springrestapi.springrestapi.services;

import java.util.ArrayList;
//import java.util.ArrayList;
import java.util.List;
//import java.util.stream.Collectors;
//import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.springrestapi.springrestapi.dao.CourseDao;
import com.springrestapi.springrestapi.entities.Course;

@Service
public class ServiceCourseImplement implements CourseService{

	@Autowired
	private CourseDao courseDao;
	public ServiceCourseImplement(){
		
	}
    
    /*
	List<Course> list;
	
	//Creating Constructor to initialize courses
	public ServiceCourseImplement() {
		list = new ArrayList<>();
		list.add(new Course(145, "Java", "This contains all the basic java", "Steele" ));
		list.add(new Course(144, "Spring Boot", "This contains basic java spring Boot", "Abdul" ));
	*/
		
	

	@Override
	public List<Course> getCourses() {
		
		return courseDao.findAll();
	}
	
	@Override
	public Course getCourse(Long courseId) {
	/*	Course c = null;
		for(Course course:list) {
			if(course.getId()==courseId) {
				c = course;
				break;
			}
		}
		*/
		//getOne is replaced by getReferenceById
		return courseDao.getReferenceById(courseId);
	}
	@Override
	public Course addCourse(Course course) {
		// list.add(course);
		courseDao.save(course);
		return course;
	}
	@Override
	public Course updateCourse(Course course) {
	/*	list.forEach(e -> {
			if(e.getId()==course.getId()) {
				e.setName(course.getName());
                e.setDesc(course.getDesc());
                e.setMentor(course.getMentor());
			}
		});
		*/
		courseDao.save(course);
		return course;
	}
	@Override
	public void deleteCourse(Long parseLong) {
		//list=this.list.stream().filter(e->e.getId()!=parseLong).collect(Collectors.toList());
		Course ent = courseDao.getReferenceById(parseLong);
		courseDao.delete(ent);
	}
	
	

}
