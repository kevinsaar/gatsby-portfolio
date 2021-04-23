import React from 'react';
import './ProjectCard.scss';
import { AiOutlineEye, AiOutlineLink, AiOutlineGithub } from 'react-icons/ai';
import { Link } from 'gatsby';

const ProjectCard = ({ project }) => {
	const categoriesList = project.categories
		.filter((cat) => cat.title !== 'All')
		.map((cat) => <li key={cat.id}>{cat.title}</li>);

	return (
		<figure className='project-card'>
			<img
				className='bg'
				src={project.featuredImage.file.url}
				alt={project.title}
			/>
			<img
				className='logo'
				src={project.logo.file.url}
				alt={project.logo.title}
			/>
			<ul className='category'>{categoriesList}</ul>
			<figcaption>
				<a href={project.projectSiteUrl} target='_blank' rel='noreferrer'>
					<AiOutlineEye />
				</a>
				{project.githubCode && (
					<a href='https://github.com' target='_blank' rel='noreferrer'>
						<AiOutlineGithub />
					</a>
				)}
				<Link to={'/projects/' + project.slug}>
					<AiOutlineLink />
				</Link>
			</figcaption>
		</figure>
	);
};

export default ProjectCard;