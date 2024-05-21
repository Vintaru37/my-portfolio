import Navbar from '../components/navbar/Navbar';
import Header from '../components/header/Header';
import About from '../components/about/About';
import Services from '../components/services/Services';

export default function PageLayout() {
	return (
		<>
			<Navbar />
			<Header />
			<main>
				<About />
				<Services />
				<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
			</main>
		</>
	);
}
