import * as React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';

const NotFoundPage = () => {
	return (
		<Layout>
			<main>
				<Helmet>
					<title>Not found</title>
				</Helmet>
				<h1>Page not found</h1>
				<Link to='/'>Go home</Link>.
			</main>
		</Layout>
	);
};

export default NotFoundPage;
