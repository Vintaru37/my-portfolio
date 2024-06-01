import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.scss';
import './i18n.js';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Suspense fallback='Loading...'>
			<App />
		</Suspense>
	</React.StrictMode>
);
