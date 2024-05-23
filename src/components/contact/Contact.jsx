import { useState, useRef } from 'react';

//styles
import './Contact.scss';

// Icons
import { FaLinkedin, FaSquareInstagram } from 'react-icons/fa6';
import { FaFacebookSquare } from 'react-icons/fa';

// emailJS
import emailjs from '@emailjs/browser';

export default function Contact() {
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

	const [buttonText, setButtonText] = useState('Submit');

	const form = useRef();

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

		if (!formData.name) validate.name = 'Name is required';
		if (!formData.email) validate.email = 'Email is required';
		else {
			const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
			if (!emailRegex.test(formData.email)) validate.email = 'Email is invalid';
		}
		if (!formData.message) validate.message = 'Message is required';

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
						setButtonText('Message Sent!');
						setTimeout(() => {
							setButtonText('Submit');
						}, 3000);
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
		<section id='contact' className='contact wrapper section-container'>
			<h2 className='contact__title section-title'>Contact</h2>
			<p className='contact__subtitle'>
				If you have any questions or would like to collaborate, feel free to
				reach out to me!
			</p>
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
						placeholder='Your Name'
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
						placeholder='Your Email'
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
						placeholder='Message'
						name='message'
						value={formData.message}
						onChange={handleChange}></textarea>
					{errors.message && (
						<p className='contact__content-form-error'>{errors.message}</p>
					)}
					<button className='contact__content-form-btn primary-btn'>
						<span>{buttonText}</span>
					</button>
				</form>
				<div className='contact__content-socials'>
					<h3 className='contact__content-socials-title'>Send me an email</h3>
					<p>or</p>
					<h3 className='contact__content-socials-title'>
						Find me on social media!
					</h3>
					<a
						href='https://www.facebook.com/bartosz.gortych.315inst'
						className='contact__content-socials-item'>
						<FaFacebookSquare /> Facebook
					</a>
					<a
						href='https://www.linkedin.com/in/bartosz-gortych-944a592b7/'
						className='contact__content-socials-item'>
						<FaLinkedin /> LinkedIn
					</a>
					<a
						href='https://www.instagram.com/bartosz_gortych/'
						className='contact__content-socials-item'>
						<FaSquareInstagram /> Instagram
					</a>
				</div>
			</div>
		</section>
	);
}
