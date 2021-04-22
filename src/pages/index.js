import * as React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import About from '../components/About';
import Hero from '../components/Hero';
import LatestProjects from '../components/LatestProjects';

const IndexPage = () => {
	return (
		<Layout>
			<Helmet>
				<title>Kevin Saar | Frontend developer</title>
			</Helmet>
			<main>
				<Hero />
				<About />
				<LatestProjects />
			</main>
		</Layout>
	);
};

export default IndexPage;
