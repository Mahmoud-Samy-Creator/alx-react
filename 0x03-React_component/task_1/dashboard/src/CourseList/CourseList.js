import React from "react";
import CourseListRow from "./CourseListRow";
import './CourseList.css';
import PropTypes from 'prop-types'
import CourseShape from './CourseShape'

export default function CourseList({ listCourses  = []}) {
    let content;

    if (listCourses.length > 0) {
        content = listCourses.map(
            ({id, name, credit}) => <CourseListRow key={id} textFirstCell={name} textSecondCell={credit}/>)
    } else {
        content = <CourseListRow textFirstCell="No course available yet"/>
    }
    return(
        <table id = "CourseList">
            <thead>
                <CourseListRow 
                    textFirstCell = "Available courses"
                    isHeader = {true}
                    textSecondCell = {null}
                    />
            </thead>
            <thead>
                <CourseListRow 
                    textFirstCell = "Course name"
                    textSecondCell="Credit"
                    isHeader = {true}
                    />
            </thead>
            <tbody>
                {content}
            </tbody>
        </table>
    );
}

CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape)
};