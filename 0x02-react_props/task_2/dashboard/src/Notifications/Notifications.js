import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';

export default function Notifications() {
	return (
		<div className='Notifications'>
			<p style={{ display: 'inline', marginRight: '80%' }}>
				Here is the list of notifications
			</p>
			<button
				aria-label='Close'
				onClick={console.log('Close button has been clicked')}
			>
				<img style={{ display: 'inline' }} src={closeIcon} alt='Close' />
			</button>
			<ul>
				<NotificationItem type='default' value='New course available'/>
				<NotificationItem type='urgent' value='New resume available'/>
				<NotificationItem type='urgent' html={{ __html: getLatestNotification() }} value=''/>
			</ul>
		</div>
	);
};
