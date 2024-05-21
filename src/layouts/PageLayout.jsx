import Navbar from '../components/navbar/Navbar';
import Header from '../components/header/Header';
import About from '../components/about/About';
import Services from '../components/services/Services';
import Portfolio from '../components/portfolio/Portfolio'

export default function PageLayout() {
	return (
		<>
			<Navbar />
			<Header />
			<main>
				<About />
				<Services />
				<Portfolio />
				<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
			</main>
		</>
	);
}
