import * as React from 'react';
import Layout from '../components/Layout';
import About from '../components/About';
import Hero from '../components/Hero';
import LatestProjects from '../components/LatestProjects';
import Seo from '../components/Seo';

const IndexPage = () => {
	return (
		<Layout>
			<Seo />
			<main>
				<Hero />
				<About />
				<LatestProjects />
			</main>
		</Layout>
	);
};

export default IndexPage;
