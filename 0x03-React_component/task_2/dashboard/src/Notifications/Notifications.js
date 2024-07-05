import React, { Component } from 'react';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';


class Notifications extends Component {
	constructor(props) {
		super(props);
		this.markAsRead = this.markAsRead.bind(this);
	}

	markAsRead(id) {
		console.log(`Notification ${id} has been marked as read`);
	}

	render() {
		const { displayDrawer,  listNotifications} = this.props;
		let NotificationsDrawer;
		let notificationsExists;
		if (!listNotifications.length) {
			notificationsExists = <NotificationItem type='default' value='No new notification for now'/>
		} else {
			notificationsExists = listNotifications.map(({ id, html, type, value }) =>
				<NotificationItem key={id} type={type} html={html} value = {value} markAsRead = {() => {this.markAsRead(id)}}/>
			)
		}

		if (displayDrawer) {
			NotificationsDrawer = <div className='fragment'>
										<div className= 'menuItem'>Your notifications </div>
										<div className = 'Notifications'>
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
