import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Header from './components/header/Header';
// import About from './components/about/About';
import PageLayout from './layouts/PageLayout';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<PageLayout />}>
					{/* <Route index element={<Header />} />
					<Route index element={<About />} /> */}
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
