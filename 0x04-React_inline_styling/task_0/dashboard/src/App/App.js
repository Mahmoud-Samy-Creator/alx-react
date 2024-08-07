import React, { Component, Fragment } from 'react';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';

const listCourses = [
	{ id: 1, name: 'ES6', credit: 60 },
	{ id: 2, name: 'Webpack', credit: 20 },
	{ id: 3, name: 'React', credit: 40 },
];

const listNotifications = [
	{ id: 1, type: 'default', value: 'New course available' },
	{ id: 2, type: 'urgent', value: 'New resume available' },
	{ id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
];

class App extends Component {
	constructor(props) {
		super(props);
		this.handlePress = this.handlePress.bind(this);
	}

	// Add an event listener when the component is mounted to listen to when the user is pressing down the keyboard keys
	componentDidMount() {
		document.addEventListener('keydown', this.handlePress)
	}

	// Make sure to remove the event listener when the component is unmounted
	componentWillUnmount() {
		document.removeEventListener('keydown', this.handlePress)
	}

	handlePress(event) {
		if (event.ctrlKey && event.key === 'h') {
			event.preventDefault();
			
			alert('Logging you out');
			this.props.logOut();
		}
	}
	render() {
		const { isLoggedIn } = this.props;
		return (
			<Fragment>
				<Notifications listNotifications={listNotifications} displayDrawer = {true}/>
				<Header />
				{isLoggedIn ? 
					<BodySectionWithMarginBottom title='Course list'>
						<CourseList listCourses={listCourses} />
					</BodySectionWithMarginBottom> 
					: <BodySectionWithMarginBottom title='Log in to continue'>
							<Login />
						</BodySectionWithMarginBottom>}
					<BodySection title='News from the School'>
						<p>News From Here</p>
					</BodySection>
				<Footer />
			</Fragment>
		);
		}
}

App.defaultProps = {
	isLoggedIn: true,
};

App.propTypes = {
	isLoggedIn: PropTypes.bool,
	logOut: PropTypes.func
};

App.defaultProps = {
	isLoggedIn:false,
	logOut: () => {}
}
export default App;