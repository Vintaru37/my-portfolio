import { useTranslation } from 'react-i18next';

// styles
import './LanguageSelector.scss';

export default function LanguageSelector() {
    const { i18n } = useTranslation();

	const changeLanguage = (lang) => {
        i18n.changeLanguage(lang)
    };

	return (
		<div className='lang-change-container'
        
        >
			<button onClick={() => changeLanguage('pl')} className='lang-change-btn primary-text-hover' style={i18n.language === 'pl' ? {fontWeight: 'bold'} : {}}>
				PL
			</button>{' '}
			|{' '}
			<button onClick={() => changeLanguage('en')} className='lang-change-btn'
            style={i18n.language === 'en' ? {fontWeight: 'bold'} : {}}>
				EN
			</button>
		</div>
	);
}
