import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications'
import CourseList from '../CourseList/CourseList';
import './App.css';
import React from 'react';
import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { getLatestNotification } from "../utils/utils";


let listCourses = [
	{ id: 1, name: 'ES6', credit: 60 },
	{ id: 2, name: 'Webpack', credit: 20 },
	{ id: 3, name: 'React', credit: 40 },
]

let listNotifications = [
	{ id: 1, type: 'default', value: 'New course available'},
	{ id: 2, type: 'urgent', value: 'New resume available',},
	{ id: 3, type: 'urgent', value: '', html: { __html: getLatestNotification() }}
]

export default function App({ isLoggedIn = false}) {
	let component;
	
	if (isLoggedIn) {
		component = <CourseList listCourses = {listCourses}/>
		
	} else {
		component = <div className='App-body'>
						<p>Login to access the full dashboard</p>
						<Login />
					</div>
	}
	return (
		<Fragment>
			<div className='App'>
				<Notifications displayDrawer = {true} listNotifications = {listNotifications}/>
				<Header />
					{component}
				<Footer />
			</div>
		</Fragment>
	);
}

App.propTypes = {
	isLoggedIn: PropTypes.bool
}