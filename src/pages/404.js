import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

const NotFoundPage = () => {
	return (
		<Layout>
			<main>
				<h1>Page not found</h1>
				<Link to='/'>Go home</Link>.
			</main>
		</Layout>
	);
};

export default NotFoundPage;
