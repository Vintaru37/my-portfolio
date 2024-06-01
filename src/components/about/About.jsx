import { useState } from 'react';
import { useTranslation } from 'react-i18next'

// styles
import './About.scss';

// images
import aboutImg from '../../assets/images/img.png';

// hooks
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

export default function About() {
  const { t } = useTranslation();
  const about = t("about");
  const [activeButton, setActiveButton] = useState(about.intTitle);
  const { ref, inView } = useIntersectionObserver();

  const data = [
    {
      title: about.intTitle,
      items: [
        about.intLineOne,
        about.intLineOneInfo,
        about.intLineTwo,
        about.intLineTwoInfo,
      ],
    },
    {
      title: about.eduTitle,
      items: [
        '2015 - 2019',
        about.eduLineOneInfo,
        about.eduDateTwo,
        about.eduLineTwoInfo,
      ],
    },
    {
      title: about.skillsTitle,
      items: [
        about.skillsLineOne,
        about.skillsLineOneInfo,
        about.skillsLineTwo,
        about.skillsLineTwoInfo,
      ],
    },
  ];

  const handleClick = (e) => {
    setActiveButton(e.target.innerText);
  };

  return (
    <section ref={ref} id='about' className={`about wrapper section-container ${inView ? 'in-view' : 'out-view'}`}>
      <h2 className='about__title section-title'>{about.title}</h2>
      <div className='about__content'>
        <img
          src={aboutImg}
          alt='Author profile picture'
          className='about__content-img'
        />
        <div className='about__content-info'>
          <p className='about__content-info-text'>
            {about.description}
          </p>
          <div className='about__content-info-data'>
            {data.map((item) => (
              <button
                className={`about__content-info-data-btn ${activeButton === item.title? 'data-active' : ''}`}
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