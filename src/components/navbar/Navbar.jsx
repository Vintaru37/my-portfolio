import { Link } from 'react-scroll';
// styles
import './Navbar.scss';

// images
import logo from '../../assets/images/logo.png';

export default function Navbar() {
	const navItems = [
		{ to: 'home', text: 'Home', offset: -200 },
		{ to: 'about', text: 'About', offset: 0 },
		{ to: 'services', text: 'Services', offset: 0 },
		{ to: 'portfolio', text: 'Portfolio', offset: 0 },
		{ to: 'contact', text: 'Contact', offset: 0 },
	];

	return (
		<div className='nav-container'>
			<nav className='nav wrapper'>
				<Link offset={-200} to='home' className='nav__logo'>
					<img src={logo} alt='Website logo' className='nav__logo-image' />
				</Link>
				<ul className='nav__list'>
					{navItems.map((item) => (
						<li key={item.text} className='nav__list-item'>
							<Link
								activeClass='active'
								spy={true}
								offset={item.offset}
								duration={200}
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
