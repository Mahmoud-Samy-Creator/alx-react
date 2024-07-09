import React, { PureComponent } from "react";
import { StyleSheet, css } from "aphrodite";
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
	liDefult: {
		color: 'blue'
	},
	liUrgent: {
		color: 'red'
	}
})


class NotificationItem extends PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        const {type, html, value, markAsRead, id} = this.props;
        const className = css(
            type === 'default' ? styles.liDefult : styles.liUrgent
        )

        if (value) return <li className={className} data={type} onClick = {() => markAsRead(id)}>{value}</li>;
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