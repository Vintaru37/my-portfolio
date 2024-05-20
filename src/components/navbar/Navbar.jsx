import { NavLink } from 'react-router-dom';

// styles
import './Navbar.scss';

// images
import logo from '../../assets/images/logo.png';

export default function Navbar() {
	const navItems = [
		{ to: '/', text: 'Home' },
		{ to: '/9', text: 'About' },
		{ to: '/9', text: 'Portfolio' },
		{ to: '/9', text: 'Contact' },
	];
	return (
		<div className='nav-container'>
			<nav className='nav wrapper'>
				<div className='nav__logo'>
					{/* <h2 className='primary-text'>Bartosz.</h2> */}
					<img src={logo} alt='' className='nav__logo-image' />
				</div>
				<ul className='nav__list'>
					{navItems.map((item) => (
						<li key={item.text} className='nav__list-item'>
							<NavLink
								className='nav__list-item-link primary-text-hover'
								to={item.to}>
								{item.text}
							</NavLink>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
}
