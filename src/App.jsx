import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import PageLayout from './layouts/PageLayout';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<PageLayout />}>
					<Route index element={<Header />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
