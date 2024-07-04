import React from "react";
import PropTypes from 'prop-types';


export default function CourseListRow({ isHeader = false, textFirstCell, textSecondCell = null }) {
    let th;

    if (isHeader) {
        if (textSecondCell === null) {
            th = <th colSpan={2}>{textFirstCell}</th>
        } else {
            th = <>
                    <th>{textFirstCell}</th>
                    <th>{textSecondCell}</th>
                </>
        }
    } else {
        th = <>
                <td>{textFirstCell}</td>
                <td>{textSecondCell}</td>
            </>
    }

    return(
        <tr> {th} </tr>
    );
}

// Identiding the props requirments
CourseListRow.PropTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.string
};
