import { useTranslation } from 'react-i18next';

// styles
import './Portfolio.scss';

// icons
import { LuExternalLink } from 'react-icons/lu';

// images
import CCImage from '../../assets/images/portfolio-img-1.webp';
import ForestImage from '../../assets/images/portfolio-img-2.webp';
import LexArcanum from '../../assets/images/portfolio-img-4.webp';

// hooks
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

export default function Portfolio() {
	const { t } = useTranslation();
	const {
		proOneTitle,
		proOneDesc,
		proOneCoauthor,
		proTwoTitle,
		proTwoDesc,
		proThreeTitle,
		proThreeDesc,
	} = t('portfolio');

	const projects = [
		{
			title: proOneTitle,
			description: proOneDesc,
			coauthor: proOneCoauthor,
			coauthorLink: 'https://maciejgortych.com/',
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
			link: 'https://coral-starling-319321.hostingersite.com/',
			image: LexArcanum,
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
							<p>
								{project.description}{' '}
								{project.coauthor && (
									<>
										<a
											href={project.coauthorLink}
											target='_blank'
											rel='noopener'
											className='portfolio__projects-item-layer-coauthor'>
											{project.coauthor}
										</a>
										.
									</>
								)}
							</p>

							<a
								className='portfolio__projects-item-layer-link'
								target='_blank'
								rel='noopener'
								href={project.link}>
								<LuExternalLink />
							</a>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
