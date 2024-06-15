import { useTranslation } from 'react-i18next';

// styles
import './Portfolio.scss';

// icons
import { LuExternalLink } from "react-icons/lu";

// images
import CCImage from '../../assets/images/portfolio-img-1.webp';
import ForestImage from '../../assets/images/portfolio-img-2.webp';
import QuizzicalImage from '../../assets/images/portfolio-img-3.webp';

// hooks
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

export default function Portfolio() {
	const { t } = useTranslation();
	const {
		proOneTitle,
		proOneDesc,
		proTwoTitle,
		proTwoDesc,
		proThreeTitle,
		proThreeDesc,
	} = t('portfolio');

	const projects = [
		{
			title: proOneTitle,
			description: proOneDesc,
			link: 'https://twogordev-first-app.onrender.com/',
			image: CCImage,
		},
		{
			title: proTwoTitle,
			description: proTwoDesc,
			link: 'https://vintaru37.github.io/forest/',
			image: ForestImage,
		},
		{
			title: proThreeTitle,
			description: proThreeDesc,
			link: 'https://vintaru37.github.io/quiz-app/',
			image: QuizzicalImage,
		},
	];

	const { ref, inView } = useIntersectionObserver();
	return (
		<section
			ref={ref}
			id='portfolio'
			className={`portfolio wrapper section-container ${
				inView ? 'in-view' : 'out-view'
			}`}>
			<h2 className='portfolio__title section-title'>Portfolio</h2>
			<div className='portfolio__projects'>
				{projects.map((project, index) => (
					<div key={index} className='portfolio__projects-item'>
						<img
							src={project.image}
							alt='Portfolio project'
							className='portfolio__projects-item-img'
						/>
						<div className='portfolio__projects-item-layer'>
							<h3>{project.title}</h3>
							<p>{project.description}</p>
							<a target='_blank' rel='noopener' href={project.link}>
							<LuExternalLink />
							</a>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
