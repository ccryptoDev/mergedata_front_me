import React from 'react';
import ReactDOM from 'react-dom/client';
import 'flowbite';

import App from '@/routes/App';
import { AuthProvider } from '@/context/AuthProvider';
import { ReportsProvider } from '@/context/ReportsProvider';
import '@/css/global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AuthProvider>
			<ReportsProvider>
				<App />
			</ReportsProvider>
		</AuthProvider>
	</React.StrictMode>,
);
