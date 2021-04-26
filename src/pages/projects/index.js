import { graphql } from 'gatsby';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/Layout';
import ProjectCard from '../../components/ProjectCard';
import '../../styles/projects.scss';

const Projects = ({ data }) => {
	const { description, title } = data.allContentfulAllProjectsPage.nodes[0];
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
					<meta
						name='description'
						content='A portfolio site for a frontend developer using Gatsby. Here are all my done  projects.'
					/>
					<html lang='en' />
				</Helmet>
				<div className='max-width'>
					<section className='projects'>
						<h2>
							{title.normal}
							<b> {title.colorful}</b>
						</h2>
						<p>{description}</p>
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
		allContentfulAllProjectsPage {
			nodes {
				description
				title {
					normal
					colorful
				}
			}
		}
		allContentfulProject(sort: { fields: finishDate }) {
			nodes {
				id
				finishDate
				projectSiteUrl
				slug
				title
				imageGallery {
					fluid {
						...GatsbyContentfulFluid
					}
					title
				}
				logo {
					fluid {
						...GatsbyContentfulFluid
					}
					title
				}
				featuredImage {
					title
					fluid {
						...GatsbyContentfulFluid
					}
				}
				description {
					raw
				}
				categories {
					title
					id
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
