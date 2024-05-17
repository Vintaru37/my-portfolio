// styles
import './Header.scss';

// images
import headerImage from '../../assets/images/header-image.png'

export default function Header() {
	return (
		<header className='header wrapper'>
			<div className='header__text'>
            <p>Frontend Developer</p>
				<h1 className='header__text-title'>
					Hi, I'm <span className='primary-text'>Bartosz
                    <br /> Gortych</span> from Poland
				</h1>
            <p className='header__text-info'>Building innovative solutions, one line of code at a time.</p>
            <a href='#' className='header__text-btn primary-link'><span>Get to know me</span></a>
			</div>
            <img src={headerImage} className='header__image'></img>
		</header>
	);
}
