import { graphql } from 'gatsby';
import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import ProjectCard from '../../components/ProjectCard';
import Seo from '../../components/Seo';
import '../../styles/projects.scss';

const Projects = ({ data }) => {
	const [activeFilter, setActiveFilter] = useState('All');

	const { description, title } = data.allContentfulAllProjectsPage.nodes[0];
	const categories = data.allContentfulCategory.nodes;
	const projects = data.allContentfulProject.nodes;

	const filterButtons = categories.map((category) => (
		<button
			className={activeFilter === category.title ? 'active' : ''}
			key={category.id}
			onClick={() => setActiveFilter(category.title)}
		>
			{category.title}
		</button>
	));

	const filteredProjectsList = projects
		.filter((project) =>
			project.categories.some((cat) => cat.title === activeFilter)
		)
		.map((project) => (
			<li key={project.id}>
				<ProjectCard project={project} key={project.id} />
			</li>
		));

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<Layout>
			<Seo
				title={`${title.normal} ${title.colorful}`}
				description='Here are some examples of projects that I have done, personal and work related.'
			/>
			<main>
				<div className='max-width'>
					<section className='projects'>
						<h2>
							{title.normal}
							<b> {title.colorful}</b>
						</h2>
						<p>{description}</p>
						<div className='filter'>{filterButtons}</div>
						<ul className='projects-wrap'>
							{filteredProjectsList && filteredProjectsList}
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
				logo {
					gatsbyImageData(
						placeholder: BLURRED
						layout: FULL_WIDTH
						formats: [AUTO, WEBP]
					)
					title
				}
				featuredImage {
					title
					gatsbyImageData(
						placeholder: BLURRED
						layout: FULL_WIDTH
						formats: [AUTO, WEBP]
					)
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
