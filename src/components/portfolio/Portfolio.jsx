import { useTranslation } from 'react-i18next';

// styles
import './Portfolio.scss';

// icons
import { FaExternalLinkAlt } from 'react-icons/fa';

// images
import CCImage from '../../assets/images/portfolio-img-1.png';
import ForestImage from '../../assets/images/portfolio-img-2.png';
import QuizzicalImage from '../../assets/images/portfolio-img-3.png';

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
	return (
		<section id='portfolio' className='portfolio wrapper section-container'>
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
							<a href={project.link}>
								<FaExternalLinkAlt />
							</a>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
