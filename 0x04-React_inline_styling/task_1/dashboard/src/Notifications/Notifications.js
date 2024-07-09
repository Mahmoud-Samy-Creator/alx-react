import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';


const styles = StyleSheet.create({
	fragment: {
		width: 'fit-content',
		position: 'absolute',
		right: '5px',
		zIndex: '100',
	},
	notifications: {
		padding: '2em',
		border: '2px dashed red',
		height: '100px'
	},
	liDefult: {
		color: 'blue'
	},
	liUrgent: {
		color: 'red'
	}
})

class Notifications extends Component {
	constructor(props) {
		super(props);
		this.markAsRead = this.markAsRead.bind(this);
	}

	markAsRead(id) {
		console.log(`Notification ${id} has been marked as read`);
	}

	shouldComponentUpdate(nextProps) {
		return (
			nextProps.listNotifications.length > this.props.listNotifications.length
		)
	}

	render() {
		const { displayDrawer,  listNotifications} = this.props;
		let NotificationsDrawer;
		let notificationsExists;

		notificationsExists = !listNotifications.length ?
		<NotificationItem type='default' value='No new notification for now'/>
		: 
		listNotifications.map(({ id, html, type, value }) =>
			<NotificationItem
						id = {id}
						key={id}
						type={type}
						value={value}
						html={html}
						markAsRead={this.markAsRead} />)

		if (displayDrawer) {
			NotificationsDrawer = <div className={css(styles.fragment)}>
										<div className= 'menuItem'>Your notifications </div>
										<div className = {css(styles.notifications)}>
										<p style={{ display: 'inline', marginRight: '80%' }}>
											Here is the list of notifications
										</p>
										<ul>
											{notificationsExists}
										</ul>
									</div>
								</div>
		} else {
			NotificationsDrawer = <></>
		}
			return (
				<>
					{NotificationsDrawer}
				</>
			);
		}
}

Notifications.propTypes = {
	displayDrawer: PropTypes.bool,
	listNotifications: PropTypes.arrayOf(NotificationItemShape),
}

export default Notifications;
