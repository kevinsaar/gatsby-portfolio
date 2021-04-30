import React from 'react';
import './ProjectCard.scss';
import { AiOutlineEye, AiOutlineLink, AiOutlineGithub } from 'react-icons/ai';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

const ProjectCard = ({ project }) => {
	const categoriesList = project.categories
		.filter((cat) => cat.title !== 'All')
		.map((cat) => <li key={cat.id}>{cat.title}</li>);

	return (
		<figure className='project-card'>
			<GatsbyImage
				className='bg'
				image={project.featuredImage.gatsbyImageData}
				alt={project.featuredImage.title}
			/>
			{project.logo ? (
				<GatsbyImage
					className='logo'
					image={project.logo.gatsbyImageData}
					alt={project.logo.title}
				/>
			) : (
				<span className='nologo'>{project.title}</span>
			)}
			{categoriesList && <ul className='category'>{categoriesList}</ul>}
			<figcaption>
				{project.projectSiteUrl && (
					<a
						href={project.projectSiteUrl}
						target='_blank'
						rel='noreferrer'
						aria-label='Projects live website'
					>
						<AiOutlineEye />
					</a>
				)}
				{project.githubCodeUrl && (
					<a
						href={project.githubCodeUrl}
						target='_blank'
						rel='noreferrer'
						aria-label='Project code on GitHub'
					>
						<AiOutlineGithub />
					</a>
				)}
				<Link to={'/projects/' + project.slug} aria-label='Project details'>
					<AiOutlineLink />
				</Link>
			</figcaption>
		</figure>
	);
};

export default ProjectCard;
