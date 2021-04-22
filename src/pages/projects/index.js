import { graphql } from 'gatsby';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/Layout';
import ProjectCard from '../../components/ProjectCard';
import '../../styles/projects.scss';

const Projects = ({ data }) => {
	const projects = data.allContentfulProject.nodes;
	const categories = data.allContentfulCategory.nodes;

	const [activeFilter, setActiveFilter] = useState('All');

	const filterButtons = categories.map((category) => (
		<button
			className={activeFilter === category.title ? 'active' : ''}
			key={category.id}
			onClick={() => setActiveFilter(category.title)}
		>
			{category.title}
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
							{projects.map((project) => (
								<ProjectCard project={project} key={project.id} />
							))}
						</ul>
					</section>
				</div>
			</main>
		</Layout>
	);
};

export default Projects;

export const query = graphql`
	query AllProjects {
		allContentfulProject(sort: { fields: finishDate }) {
			nodes {
				id
				finishDate
				projectSiteUrl
				slug
				title
				imageGallery {
					file {
						url
					}
					title
				}
				featuredImage {
					title
					file {
						url
					}
				}
				description {
					raw
				}
				categories {
					title
					id
				}
				logo {
					title
					file {
						url
					}
				}
			}
		}
		allContentfulCategory(sort: { fields: createdAt }) {
			nodes {
				title
				id
			}
		}
	}
`;
