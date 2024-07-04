import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications'
import './App.css';
import React from 'react';


export default function App() {
	return (
		<>
		<Notifications />
		<div className='App'>
			<Header />
			<div className='App-body'>
				<p>Login to access the full dashboard</p>
				<Login />
			</div>
			<Footer />
		</div>
		</>
	);
}
