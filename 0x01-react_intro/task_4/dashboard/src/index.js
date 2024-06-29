import React from 'react';
import ReactDOM from 'react-dom';
import Notifications from './Notifications';
import Root from './Root'; // Import the Root component

// Render the Root component with App inside it
ReactDOM.render(
	<React.StrictMode>
		<Root />
	</React.StrictMode>,
	document.getElementById('root')
);

// Render the Notifications component separately
ReactDOM.render(
	<React.StrictMode>
		<Notifications />
	</React.StrictMode>,
	document.getElementById('root-notifications')
);
