import { NavLink } from 'react-router-dom';

// styles
import './Navbar.scss';

// images
import logo from '../../assets/images/bg-logo.png';

export default function Navbar() {
	return (
		<nav className='nav'>
			<div className='nav__logo'>
				<img src={logo} alt='' className='nav__logo-image' />
			</div>
			<ul className='nav__list'>
				<li className='nav__list-item'>
					<NavLink to='/' className='nav__list-item-link'>
						Home
					</NavLink>
				</li>
				<li className='nav__list-item'>
					<NavLink to='/' className='nav__list-item-link'>
						About
					</NavLink>
				</li>
				<li className='nav__list-item'>
					<NavLink to='/' className='nav__list-item-link'>
						Projects
					</NavLink>
				</li>
				<li className='nav__list-item'>
					<NavLink to='/' className='nav__list-item-link'>
						Contact
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}
