import React, { PureComponent } from "react";
import PropTypes from 'prop-types'


class NotificationItem extends PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        const {type, html, value, markAsRead, id} = this.props;
        if (value) return <li data={type} onClick = {() => markAsRead(id)}>{value}</li>;
        return <li data={type} dangerouslySetInnerHTML={html} onClick = {() => markAsRead(id)}></li>
    }
}

NotificationItem.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    markAsRead: PropTypes.func,
    html: PropTypes.shape({
        __html: PropTypes.string,
    }),
};


export default NotificationItem;