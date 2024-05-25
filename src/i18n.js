import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

import langPL from '../public/locales/pl/translation.json';
import langEN from '../public/locales/en/translation.json';

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.use(Backend)
	.init({
		debug: true,
		lng: 'pl',
		fallbackLng: 'pl',
		returnObjects: true,
		// resources: {
		// 	pl: {
		// 		common: langPL,
		// 	},
		// 	en: {
		// 		common: langEN,
		// 	},
		// },
		ns: ['common'],

		interpolation: {
			escapeValue: false,
		},
		backend: {
			loadPath: '/my-portfolio/locales/{{lng}}/translation.json'
		}
	});
