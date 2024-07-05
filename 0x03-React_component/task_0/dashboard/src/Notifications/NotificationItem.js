import React from "react";
import PropTypes from 'prop-types'

export default function NotificationItem({type = 'default', html, value}) {

    if (value) return <li data={type}>{value}</li>;
    return <li data={type} dangerouslySetInnerHTML={html}></li>
}

NotificationItem.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    html: PropTypes.shape({
        __html: PropTypes.string,
    }),
};
