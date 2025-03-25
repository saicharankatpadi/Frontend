// CourseItem.js
import React, { useState } from 'react';

function CourseItem({ course }) {
  const [isCompleted, setIsCompleted] = useState(course.isCompleted);

  const handleCompletion = () => {
    // Update completion status in the backend
    fetch(`/api/courses/${course.id}/complete`, { method: 'POST' })
      .then(response => {
        if (response.ok) {
          setIsCompleted(true);
        } else {
          console.error('Failed to update completion status');
        }
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <li>
      <a href={course.youtubeLink} target="_blank" rel="noopener noreferrer">
        {course.title}
      </a>
      {isCompleted ? (
        <span> (Completed)</span>
      ) : (
        <button onClick={handleCompletion}>Mark as Complete</button>
      )}
    </li>
  );
}

export default CourseItem;
