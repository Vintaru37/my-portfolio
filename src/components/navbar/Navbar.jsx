import { useState } from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next'

// styles
import './Navbar.scss';

// images
import logo from '../../assets/images/logo.png';

// components
import LanguageSelector from '../languageSelector/LanguageSelector';

export default function Navbar() {
	const { t } = useTranslation()
	const { about, services, contact } = t("navbar")

	const navItems = [
		{ to: 'home', text: 'Home', offset: -200 },
		{ to: 'about', text: about, offset: 0 },
		{ to: 'services', text: services, offset: 0 },
		{ to: 'portfolio', text: 'Portfolio', offset: 0 },
		{ to: 'contact', text: contact, offset: 0 },
	];
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setMobileMenuOpen(prevSt => !prevSt)
	};

	return (
		<div className='nav-container'>
			<nav className='nav wrapper'>
				<LanguageSelector />
				<Link offset={-200} to='home' className='nav__logo'>
					<img src={logo} alt='Website logo' className='nav__logo-image' />
				</Link>
				<div
					className={`nav__hamburger ${mobileMenuOpen? 'open' : ''}`}
					onClick={toggleMobileMenu}
				>
					<div className='nav__hamburger-line'></div>
					<div className='nav__hamburger-line'></div>
					<div className='nav__hamburger-line'></div>
				</div>
				<ul className={`nav__list ${mobileMenuOpen? 'open' : ''}`}>
					{navItems.map((item) => (
						<li key={item.text} className='nav__list-item'>
							<Link
							onClick={() => setMobileMenuOpen(false)}
								activeClass='active'
								spy={true}
								offset={item.offset}
								duration={500}
								className='nav__list-item-link primary-text-hover'
								to={item.to}>
								{item.text}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
}