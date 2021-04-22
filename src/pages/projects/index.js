import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/Layout';
import Project from '../../components/Project';
import '../../styles/projects.scss';

const filters = ['all', 'work', 'personal'];

const Projects = () => {
	const [activeFilter, setActiveFilter] = useState('all');

	const filterButtons = filters.map((filter, index) => (
		<button
			className={activeFilter === filter ? 'active' : ''}
			key={index}
			onClick={() => setActiveFilter(filter)}
		>
			{filter}
		</button>
	));

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<Layout>
			<main>
				<Helmet>
					<title>All projects</title>
				</Helmet>
				<div className='max-width'>
					<section className='projects'>
						<h2>
							Done <b>work</b>
						</h2>
						<p>
							Here's a presentation of past work done for clients as well some
							personal projects.
						</p>
						<div className='filter'>{filterButtons}</div>
						<ul className='projects-wrap'>
							<Project />
							<Project />
							<Project />
							<Project />
						</ul>
					</section>
				</div>
			</main>
		</Layout>
	);
};

export default Projects;
