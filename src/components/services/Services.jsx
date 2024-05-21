//styles
import './Services.scss';

// icons
import { FaCode } from 'react-icons/fa';
import { HiMiniWrenchScrewdriver } from 'react-icons/hi2';
import { SlSpeedometer } from 'react-icons/sl';

export default function Services() {
	return (
		<section className='wrapper services section-container'>
			<h2 className='services__title section-title'>My Services</h2>
			<div className='services__boxes'>
				<div className='services__boxes-box'>
					<FaCode />
					<h3 className='services__boxes-box-title'>Web Design</h3>
					<p className='services__boxes-box-text'>
						Visually appealing, user-friendly websites tailored to business
						needs and goals. Service includes layout, color scheme, typography
						and imagery design.
					</p>
				</div>
				<div className='services__boxes-box'>
					<HiMiniWrenchScrewdriver />
					<h3 className='services__boxes-box-title'>Web Maintenance</h3>
					<p className='services__boxes-box-text'>
						Continuous support and maintenance for website updates, content
						management and troubleshooting.
					</p>
				</div>
				<div className='services__boxes-box'>
					<SlSpeedometer />
					<h3 className='services__boxes-box-title'>Web Optimization</h3>
					<p className='services__boxes-box-text'>
						Website speed, performance, and search engine ranking optimization
						through image compression, code minification, caching and SEO.
					</p>
				</div>
			</div>
		</section>
	);
}
