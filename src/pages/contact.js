import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';
import SocialLinks from '../components/SocialLinks';
import '../styles/contact.scss';

const Contact = ({ data }) => {
	const {
		contactTitle,
		contactText,
		contactLinks,
	} = data.allContentfulContactPage.nodes[0];

	return (
		<Layout>
			<Helmet>
				<title>Contact page</title>
				<meta
					name='description'
					content='A portfolio site for a frontend developer using Gatsby. Contact me anytime!'
				/>
				<html lang='en' />
			</Helmet>
			<main>
				<section className='contact max-width'>
					<h1>{contactTitle}</h1>
					<p>{contactText.contactText}</p>
					<SocialLinks
						github={contactLinks.gitHub}
						mail={contactLinks.email}
						linkedIn={contactLinks.linkedIn}
					/>
				</section>
			</main>
		</Layout>
	);
};

export default Contact;

export const query = graphql`
	query ContactPage {
		allContentfulContactPage {
			nodes {
				contactTitle
				contactText {
					contactText
				}
				contactLinks {
					linkedIn
					gitHub
					email
				}
			}
		}
	}
`;
