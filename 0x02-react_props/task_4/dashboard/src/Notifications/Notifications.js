import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types'

export default function Notifications({ displayDrawer = false}) {
	let NotificationsDrawer;

	if (displayDrawer) {
		NotificationsDrawer = <div className='fragment'>
									<div className= 'menuItem'>Your notifications </div>
									<div className = 'Notifications'>
									<p style={{ display: 'inline', marginRight: '80%' }}>
										Here is the list of notifications
									</p>
									<ul>
										<NotificationItem type='default' value='New course available'/>
										<NotificationItem type='urgent' value='New resume available'/>
										<NotificationItem type='urgent' html={{ __html: getLatestNotification() }} value=''/>
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
};

Notifications.propTypes = {
	displayDrawer: PropTypes.bool
}