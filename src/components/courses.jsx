// CoursesPage.js
import React, { useState, useEffect } from 'react';
import CourseItem from './CourseItem';

function CoursesPage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch courses from the backend API
    fetch('/api/courses')
      .then(response => response.json())
      .then(data => setCourses(data))
      .catch(error => console.error('Error fetching courses:', error));
  }, []);

  return (
    <div>
      <h1>Courses</h1>
      <ul>
        {courses.map(course => (
          <CourseItem key={course.id} course={course} />
        ))}
      </ul>
    </div>
  );
}

export default CoursesPage;
