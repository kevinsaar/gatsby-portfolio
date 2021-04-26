import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import './LatestProjects.scss';
import ProjectCard from './ProjectCard';

const LatestProjects = () => {
	const data = useStaticQuery(graphql`
		query LatestProjects {
			allContentfulHomepage {
				edges {
					node {
						allProjectsLink
						latestProjectsTitle {
							normal
							colorful
						}
						latestProjects {
							id
							slug
							projectSiteUrl
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
							categories {
								id
								title
							}
						}
					}
				}
			}
		}
	`);

	const {
		allProjectsLink,
		latestProjectsTitle,
	} = data.allContentfulHomepage.edges[0].node;

	const latestProjects =
		data.allContentfulHomepage.edges[0].node.latestProjects;

	const latestProjectsList = latestProjects.map((project) => (
		<ProjectCard project={project} key={project.id} />
	));

	return (
		<section className='latest-projects'>
			<div className='max-width'>
				<div className='container'>
					<span className='section-back'>
						<span>P</span>
						<span>R</span>
						<span>O</span>
						<span>J</span>
						<span>E</span>
						<span>C</span>
						<span>T</span>
						<span>S</span>
					</span>
					<h2>
						{latestProjectsTitle.normal}
						<b> {latestProjectsTitle.colorful}</b>
					</h2>
					<div className='latest-wrap'>{latestProjectsList}</div>
					<Link to='/projects'>{allProjectsLink}</Link>
				</div>
			</div>
		</section>
	);
};

export default LatestProjects;
