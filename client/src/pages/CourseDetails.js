import React, { Component } from "react";
import LoggedinNavbar from "../components/LoggedinNavbar";
import CourseCard from '../components/CourseCard';
import CourseReviewStatistics from '../components/CourseReviewStatistics';
import CourseReviewList from '../components/CourseReviewList';

class CourseDetails extends Component {
  render() {
    return (
      <div>
        <LoggedinNavbar/>
        <br/>
        <h5>Course CS-554 Details</h5>
        <br/>
        
        <div className="container">
          <div className="row">
            <div className="col-4">
              <CourseCard />
            </div>
            <div className="col-8">
              <CourseReviewStatistics />
            </div>
          </div>
          <br/>
          <div className="row" >
          <CourseReviewList/>
          </div>
          <button className="add">Add Review</button>
        </div>
      </div>
    );
  }
}

export default CourseDetails;