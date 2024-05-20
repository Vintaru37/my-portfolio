import { Outlet } from 'react-router-dom';

import Navbar from '../components/navbar/Navbar';
import Header from '../components/header/Header';
import About from '../components/about/About';

export default function PageLayout() {
	return (
		<>
			<Navbar />
			<Header />
			<main>
				<About />
				<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
			</main>
		</>
	);
}
