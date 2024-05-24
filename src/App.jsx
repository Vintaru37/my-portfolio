import { BrowserRouter, Routes, Route } from 'react-router-dom';

// styles
import './App.scss';

// layouts
import PageLayout from './layouts/PageLayout';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<PageLayout />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
