import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications'
import CourseList from '../CourseList/CourseList';
import './App.css';
import React from 'react';
import PropTypes from 'prop-types';


export default function App({ isLoggedIn = false}) {
	let component;

	if (isLoggedIn) {
		component = <CourseList />
		
	} else {
		component = <div className='App-body'>
						<p>Login to access the full dashboard</p>
						<Login />
					</div>
	}
	return (
		<div className='App'>
			<Notifications displayDrawer = {true}/>
			<Header />
			{component}
			<Footer />
		</div>
	);
}

App.propTypes = {
	isLoggedIn: PropTypes.bool
}