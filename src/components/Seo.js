import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

const Seo = ({ title, description }) => {
	const metaData = useStaticQuery(graphql`
		query MetaData {
			site {
				siteMetadata {
					description
					title
				}
			}
		}
	`);

	const siteMetadata = metaData.site.siteMetadata;

	return (
		<Helmet defaultTitle={siteMetadata.title}>
			<title>{title}</title>
			<meta
				name='description'
				content={description ? description : siteMetadata.description}
			/>
			<html lang='en' />
		</Helmet>
	);
};

export default Seo;
