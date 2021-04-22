import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';
import SocialLinks from '../components/SocialLinks';
import '../styles/contact.scss';

const Contact = () => {
	return (
		<Layout>
			<Helmet>
				<title>Contact page</title>
			</Helmet>
			<main>
				<section className='contact max-width'>
					<h1>Let's get in touch!</h1>
					<p>Contact me about anything and I'll get back to you soon.</p>
					<SocialLinks
						github='https://github.com/kevinsaar'
						mail='kevinolisiin@gmail.com'
						linkedIn='https://www.linkedin.com/in/kevin-saar/'
					/>
				</section>
			</main>
		</Layout>
	);
};

export default Contact;
