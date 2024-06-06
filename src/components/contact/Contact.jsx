import { useTranslation } from 'react-i18next';
import { useState, useRef } from 'react';

//styles
import './Contact.scss';

// Icons
import { IoLogoLinkedin, IoLogoInstagram } from 'react-icons/io5';
import { IoLogoFacebook } from 'react-icons/io';

// emailJS
import emailjs from '@emailjs/browser';

// hooks
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

export default function Contact() {
	const { t } = useTranslation();
	const {
		title,
		subtitle,
		sendInfo,
		or,
		socialMedia,
		submitBtn,
		formNamePlc,
		formEmailPlc,
		formMessagePlc,
		wasMsgSent,
		nameReq,
		emailReq,
		emailFormat,
		msgReq,
	} = t('contact');
	const [errors, setErrors] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [wasSent, setWasSent] = useState(false);
	const form = useRef();
	const { ref, inView } = useIntersectionObserver();
	const socials = [
		{
			href: 'https://www.facebook.com/bartosz.gortych.315/',
			icon: IoLogoFacebook,
			label: 'Facebook',
		},
		{
			href: 'https://www.linkedin.com/in/bartosz-gortych-944a592b7/',
			icon: IoLogoLinkedin,
			label: 'LinkedIn',
		},
		{
			href: 'https://www.instagram.com/bartosz_gortych/',
			icon: IoLogoInstagram,
			label: 'Instagram',
		},
	];

	function handleChange(e) {
		const { name, value } = e.target;
		setFormData((prevFormData) => {
			return {
				...prevFormData,
				[name]: value,
			};
		});
	}

	const sendEmail = (e) => {
		e.preventDefault();
		const validate = {};

		if (!formData.name) validate.name = nameReq;
		if (!formData.email) validate.email = emailReq;
		else {
			const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
			if (!emailRegex.test(formData.email)) validate.email = emailFormat;
		}
		if (!formData.message) validate.message = msgReq;

		if (Object.values(validate).length === 0) {
			setErrors({});
			emailjs
				.sendForm('service_u0tzjk9', 'template_be9gspg', form.current, {
					publicKey: 'INtVAtjgyPgPgRvc0',
				})
				.then(
					() => {
						setFormData({
							name: '',
							email: '',
							message: '',
						});
						setWasSent(true);
						setTimeout(() => {
							setWasSent(false);
						}, 4000);
					},
					(error) => {
						console.log('FAILED...', error.text);
					}
				);
		} else {
			setErrors(validate);
		}
	};

	return (
		<section
			ref={ref}
			id='contact'
			className={`contact wrapper section-container ${
				inView ? 'in-view' : 'out-view'
			}`}>
			<h2 className='contact__title section-title'>{title}</h2>
			<p className='contact__subtitle'>{subtitle}</p>
			<div className='contact__content'>
				<form className='contact__content-form' ref={form} onSubmit={sendEmail}>
					<input
						className='contact__content-form-input'
						style={
							errors.name
								? {
										backgroundColor: 'rgba(105, 156, 243, .3)',
										border: '1px solid rgb(105, 156, 243)',
								  }
								: {}
						}
						type='text'
						placeholder={formNamePlc}
						name='name'
						value={formData.name}
						onChange={handleChange}
					/>
					{errors.name && (
						<p className='contact__content-form-error'>{errors.name}</p>
					)}
					<input
						className='contact__content-form-input'
						style={
							errors.email
								? {
										backgroundColor: 'rgba(105, 156, 243, .3)',
										border: '1px solid rgb(105, 156, 243)',
								  }
								: {}
						}
						type='text'
						placeholder={formEmailPlc}
						name='email'
						value={formData.email}
						onChange={handleChange}
					/>
					{errors.email && (
						<p className='contact__content-form-error'>{errors.email}</p>
					)}
					<textarea
						className='contact__content-form-textarea'
						style={
							errors.message
								? {
										backgroundColor: 'rgba(105, 156, 243, .3)',
										border: '1px solid rgb(105, 156, 243)',
								  }
								: {}
						}
						placeholder={formMessagePlc}
						name='message'
						value={formData.message}
						onChange={handleChange}></textarea>
					{errors.message && (
						<p className='contact__content-form-error'>{errors.message}</p>
					)}
					<button className='contact__content-form-btn primary-btn'>
						<span>{wasSent ? wasMsgSent : submitBtn}</span>
					</button>
				</form>
				<div className='contact__content-socials'>
					<h3 className='contact__content-socials-title'>{sendInfo}</h3>
					<p>{or}</p>
					<h3 className='contact__content-socials-title'>{socialMedia}</h3>
					{socials.map((social) => (
						<a
							key={social.href}
							target='_blank'
							rel='noopener'
							href={social.href}
							className='contact__content-socials-item'>
							<social.icon /> {social.label}
						</a>
					))}
				</div>
			</div>
		</section>
	);
}
