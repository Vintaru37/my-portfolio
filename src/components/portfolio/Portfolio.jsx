import { Link } from 'react-router-dom';

// styles
import './Portfolio.scss';

// icons
import { FaExternalLinkAlt } from 'react-icons/fa';

// images
import CCImage from '../../assets/images/portfolio-img-1.png';
import ForestImage from '../../assets/images/portfolio-img-2.png';
import QuizzicalImage from '../../assets/images/portfolio-img-3.png';

export default function Portfolio() {
	const projects = [
		{
			title: 'HealThyBody - Calorie Counter',
			description:
				'HealThyBody is a calorie counter app that allows users to track their daily caloric intake.',
			link: 'https://twogordev-first-app.onrender.com/',
			image: CCImage,
		},
		{
			title: 'The Forest - Private Park',
			description:
				'The Forest is an example of what a private park website could look like. It is also one of the first websites I made.',
			link: 'https://vintaru37.github.io/forest/',
			image: ForestImage,
		},
		{
			title: 'Quizzical - General Knowledge Test',
			description:
				'Quizzical is an application that allows users to test their knowledge on a variety of topics.',
			link: 'https://vintaru37.github.io/quiz-app/',
			image: QuizzicalImage,
		},
	];
	return (
		<section className='portfolio wrapper section-container'>
			<h2 className='portfolio__title section-title'>Portfolio</h2>
			<div className='portfolio__projects'>
				{projects.map((project) => (
					<div className='portfolio__projects-item'>
						<img
							src={project.image}
							alt='Portfolio project'
							className='portfolio__projects-item-img'
						/>
						<div className='portfolio__projects-item-layer'>
							<h3>{project.title}</h3>
							<p>{project.description}</p>
							<Link to={project.link}>
								<FaExternalLinkAlt />
							</Link>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
