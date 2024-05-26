import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';

// styles
import './Header.scss';

// images
import headerImage from '../../assets/images/header-photo-2.png';

export default function Header() {
	const { t } = useTranslation();
	const { greeting, greeting2, description, btnText } = t('header');

	const letters = 'abcdefghijklmnoprstuwxyz';
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	
	let resizeTimer;

	const handleResize = () => {
		if (resizeTimer) {
		  clearTimeout(resizeTimer);
		}
		resizeTimer = setTimeout(() => {
		  setWindowWidth(window.innerWidth);
		}, 500);
	  };
	  
	  useEffect(() => {
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	  }, []);
	  
	useEffect(() => {
		if (windowWidth <= 1200) {
			return;
		}

		let interval = setInterval(() => {
			const primaryText = document.querySelector('.primary-text');
			if (primaryText) {
				let iteration = 0;

				clearInterval(interval);

				interval = setInterval(() => {
					primaryText.innerText = primaryText.innerText
						.split('')
						.map((letter, index) => {
							if (index < iteration) {
								return primaryText.dataset.value[index];
							}

							return letters[Math.floor(Math.random() * 22)];
						})
						.join('');

					if (iteration >= primaryText.dataset.value.length) {
						clearInterval(interval);
					}

					iteration += 1 / 4;
				}, 30);
			}
		}, 50);
	}, [windowWidth]);

	return (
		<header id='home' className='header wrapper'>
			<div className='header__text'>
				<p>Frontend Developer</p>
				<h1 className='header__text-title'>
					{greeting}{' '}
					<span data-value='Bartosz Gortych' className='primary-text'>
						Bartosz Gortych
					</span>{' '}
					{greeting2}
				</h1>
				<p className='header__text-info'>{description}</p>
				<Link to='about' className='header__text-btn primary-btn'>
					<span>{btnText}</span>
				</Link>
			</div>
			<img src={headerImage} alt='Author photo' className='header__image'></img>
		</header>
	);
}