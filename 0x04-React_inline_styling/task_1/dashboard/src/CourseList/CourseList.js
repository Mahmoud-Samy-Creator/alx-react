import React from "react";
import { StyleSheet, css } from "aphrodite";
import CourseListRow from "./CourseListRow";
import PropTypes from 'prop-types'
import CourseShape from './CourseShape'

const styles = StyleSheet.create({
    tableStyling: {
        marginTop: "2em",
        width: "100%",
        border: "1px solid #ddd",
        fontSize: "1.2rem",
        margin: "10px auto"
    },
})

export default function CourseList({ listCourses  = []}) {
    let content;

    if (listCourses.length > 0) {
        content = listCourses.map(
            ({id, name, credit}) => <CourseListRow key={id} textFirstCell={name} textSecondCell={credit}/>)
    } else {
        content = <CourseListRow textFirstCell="No course available yet"/>
    }
    return(
        <table id = "CourseList" className={css(styles.tableStyling)}>
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