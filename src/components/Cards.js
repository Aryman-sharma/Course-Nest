import React from "react";
import Card from "./Card";
import { useState } from "react";
function Cards({ courses,category}) {
 
const[likedCourses,setLikedCourses] = useState([]);

  if (!courses) {
    return null; // or render some fallback UI
  }
  




  function getCourses() {
    if(category === "All")
   {let allCourses = [];  
    Object.values(courses).forEach((courseCategory) => {
      courseCategory.forEach((courseData) => {
        allCourses.push(courseData);
      })
    })
    return allCourses
    }
    else /// main sirf specific category ka data array krunga
    {
      return courses[category] ;
    }
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {getCourses().map((course) => {
        return <Card key={course.id} course={course} likedCourses={likedCourses} 
        setLikedCourses={setLikedCourses}/>;
      })}
    </div>
  );
}
export default Cards;
