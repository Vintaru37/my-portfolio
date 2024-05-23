//styles
import './Services.scss';

// icons
import { FaCode } from 'react-icons/fa';
import { HiMiniWrenchScrewdriver } from 'react-icons/hi2';
import { SlSpeedometer } from 'react-icons/sl';

export default function Services() {
	const services = [
		{
			icon: FaCode,
			title: 'Web Design',
			text: 'Visually appealing, user-friendly websites tailored to business needs and goals. Service includes layout, color scheme, typography and imagery design.',
		},
		{
			icon: HiMiniWrenchScrewdriver,
			title: 'Web Maintenance',
			text: 'Continuous support and maintenance for website updates, content management and troubleshooting.',
		},
		{
			icon: SlSpeedometer,
			title: 'Web Optimization',
			text: 'Website speed, performance, and search engine ranking optimization through image compression, code minification, caching and SEO.',
		},
	];

	return (
		<section id='services' className='wrapper services section-container'>
			<h2 className='services__title section-title'>My Services</h2>
			<div className='services__boxes'>
				{services.map((service, index) => (
					<div key={index} className='services__boxes-box'>
						<service.icon />
						<h3 className='services__boxes-box-title'>{service.title}</h3>
						<p className='services__boxes-box-text'>{service.text}</p>
					</div>
				))}
			</div>
		</section>
	);
}
