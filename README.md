

Spring Boot REST API Project

Overview
This project is a simple Spring Boot application that serves as a REST API for managing courses. It includes components like controllers, services, entities, and data access objects (DAOs) to handle CRUD operations on courses.

Project Structure
- **SpringrestapiApplication.java**: Main class with the `@SpringBootApplication` annotation to initialize the Spring Boot application.
- **MyController.java**: REST API controller class managing courses with various endpoints for CRUD operations.
- **Course.java**: Entity class representing a course with attributes such as ID, name, description, and mentor.
- **CourseService.java**: Interface defining operations for managing courses.
- **ServiceCourseImplement.java**: Implementation of `CourseService` providing functionality for course management.
- **CourseDao.java**: Data access object interface extending `JpaRepository` for database operations on the `Course` entity.
- **application.properties**: Configuration file for MySQL database connection and Hibernate settings.

Getting Started
1. Clone the repository: `git clone https://github.com/your-username/your-repo.git`
2. Open the project in your preferred Java IDE.
3. Configure the MySQL database connection in the `application.properties` file.
4. Run the `SpringrestapiApplication` class to start the Spring Boot application.

API Endpoints
- **GET /home**: Retrieve a welcome message.
- **GET /courses**: Retrieve all courses.
- **GET /courses/{courseId}**: Retrieve a specific course by ID.
- **POST /courses**: Add a new course.
- **PUT /courses**: Update an existing course.
- **DELETE /courses/{courseId}**: Delete a course by ID.

Technologies Used
- Spring Boot
- Spring Data JPA
- MySQL
- Hibernate
