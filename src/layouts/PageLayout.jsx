import Navbar from '../components/navbar/Navbar';
import Header from '../components/header/Header';
import About from '../components/about/About';
import Services from '../components/services/Services';
import Portfolio from '../components/portfolio/Portfolio';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';
import FallingSquaresCrosses from '../components/fallingSquaresCrosses/FallingSquaresCrosses';

export default function PageLayout() {
	return (
		<>
			{/* <FallingSquaresCrosses /> */}
			<Navbar />
			<Header />
			<main>
				<About />
				<Services />
				<Portfolio />
				<Contact />
			</main>
			<Footer />
		</>
	);
}
