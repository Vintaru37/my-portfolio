import { useState } from 'react';

// styles
import './About.scss';

// images
import aboutImg from '../../assets/images/img.png';

export default function About() {
	const [activeButton, setActiveButton] = useState('Interests');

	const data = [
		{
			title: 'Interests',
			items: [
				'Logic games',
				"I'm passionate about playing games that challenge my strategic thinking and problem-solving skills.",
				'Physical activities',
				'From walking to weight training, physical activity plays a big role in my life.',
			],
		},
		{
			title: 'Education',
			items: [
				'2015 - 2019',
				'Rev. St. Staszic School Complex in Tarnobrzeg - ICT Technician',
				'2019 - Present',
				'Rzeszów University of Technology - Electronics & Telecommunications',
			],
		},
		{
			title: 'Skills',
			items: [
				'Soft skills',
				"I'm a communicative, self-disciplined team player with strong work organization skills and a high personal culture.",
				'Hard skills',
				'  I have a solid knowledge of HTML5, CSS, JavaScript and React.js. I am proficient in version control systems such as Git. All websites I create are fully responsive and functional.',
			],
		},
	];

	const handleClick = (e) => {
		setActiveButton(e.target.innerText);
	};

	return (
		<section id='about' className='about wrapper section-container'>
			<h2 className='about__title section-title'>About Me</h2>
			<div className='about__content'>
				<img
					src={aboutImg}
					alt='Author profile picture'
					className='about__content-img'
				/>
				<div className='about__content-info'>
					<p className='about__content-info-text'>
						I'm a creative problem-solver with a passion for building beautiful,
						user-friendly interfaces that bring ideas to life. When I'm not
						coding, you can find me exploring the latest design trends,
						experimenting with new technologies or simply enjoying the beauty of
						a well-crafted website. I'm fascinated by the way technology can
						shape our daily experiences and open new ways for growth.
					</p>
					<div className='about__content-info-data'>
						{data.map((item) => (
							<button
								className={`about__content-info-data-btn ${
									activeButton === item.title ? 'data-active' : ''
								}`}
								key={item.title}
								onClick={handleClick}>
								{item.title}
							</button>
						))}
					</div>
					{data.map((item) => (
						<ul className='about__content-info-list' key={item.title}>
							{activeButton === item.title &&
								item.items.map((subItem) => (
									<li className='about__content-info-list-item' key={subItem}>
										{subItem}
									</li>
								))}
						</ul>
					))}
				</div>
			</div>
		</section>
	);
}
