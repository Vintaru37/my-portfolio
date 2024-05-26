//styles
import { useTranslation } from 'react-i18next';
import './Services.scss';

// icons
import { FaCode } from 'react-icons/fa';
import { HiMiniWrenchScrewdriver } from 'react-icons/hi2';
import { SlSpeedometer } from 'react-icons/sl';

// hooks
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

export default function Services() {
	const { t } = useTranslation();
	const ser = t("services")
	const { ref, inView } = useIntersectionObserver();

	const services = [
		{
			icon: FaCode,
			title: ser.serOneTitle,
			text: ser.serOneDesc,
		},
		{
			icon: HiMiniWrenchScrewdriver,
			title: ser.serTwoTitle,
			text: ser.serTwoDesc,
		},
		{
			icon: SlSpeedometer,
			title: ser.serThreeTitle,
			text: ser.serThreeDesc,
		},
	];

	return (
		<section ref={ref} id='services' className={`services wrapper section-container ${inView ? 'in-view' : 'out-view'}`}>
			<h2 className='services__title section-title'>{ser.title}</h2>
			<p className='services__subtitle'>{ser.subtitle}</p>
			<p className='services__sub-info'>{ser.subtitleInfo}</p>
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
