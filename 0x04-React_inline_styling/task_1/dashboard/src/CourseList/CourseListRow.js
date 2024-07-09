import React from "react";
import PropTypes from 'prop-types';


export default function CourseListRow({ isHeader = false, textFirstCell, textSecondCell = null }) {
    let th;
    const rowStyle = { backgroundColor: "#f5f5f5ab" };
    const headerRowStyle = { backgroundColor: "#deb5b545" };
    const selectedStyling = isHeader ? headerRowStyle : rowStyle;

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
        <tr style={selectedStyling}>{th}</tr>
    );
}

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
