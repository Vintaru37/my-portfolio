import { Link } from 'react-scroll';

// styles
import './Header.scss';

// images
import headerImage from '../../assets/images/header-photo-2.png';
import aboutImg from '../../assets/images/vignette-photo.png';

export default function Header() {
	return (
		<header id='home' className='header wrapper'>
			<div className='header__text'>
				<p>Frontend Developer</p>
				<h1 className='header__text-title'>
					Hi, I'm{' '}
					<span className='primary-text'>
						Bartosz
						<br /> Gortych
					</span>{' '}
					from Poland
				</h1>
				<p className='header__text-info'>
					I love building innovative solutions, one line of code at a time.
				</p>
				<Link to='about' className='header__text-btn primary-btn'>
					<span>Get to know me</span>
				</Link>
			</div>
			<img src={headerImage} className='header__image'></img>
		</header>
	);
}
