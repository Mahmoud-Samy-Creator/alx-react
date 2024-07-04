import React from "react";
import PropTypes from 'prop-types'

export default function NotificationItem({type = 'default', html, value}) {
    return(
        value ?
        <li data={type}>{value}</li>
        : 
        <li data={type} dangerouslySetInnerHTML={html}></li>
    )
}

NotificationItem.propTypes = {
    type: PropTypes.string,
    value: PropTypes.string,
    html: PropTypes.shape({
        __html: PropTypes.string
    }),
}

