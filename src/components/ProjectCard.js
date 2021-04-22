import React from 'react';
import './ProjectCard.scss';
import projectCover from '../images/promoware.png';
import projectLogo from '../images/promoLogo.png';
import { AiOutlineEye, AiOutlineLink, AiOutlineGithub } from 'react-icons/ai';
import { Link } from 'gatsby';

const categories = ['All', 'Work', 'Personal'];

const ProjectCard = () => {
	const categoriesList = categories
		.filter((cat) => cat !== 'All')
		.map((cat, index) => <li key={index}>{cat}</li>);
	return (
		<figure className='project-card'>
			<img className='bg' src={projectCover} alt='project title' />
			<img className='logo' src={projectLogo} alt='Client(promoware) logo' />
			<ul className='category'>{categoriesList}</ul>
			<figcaption>
				<a href='https://promoware.eu' target='_blank' rel='noreferrer'>
					<AiOutlineEye />
				</a>
				<a href='https://github.com' target='_blank' rel='noreferrer'>
					<AiOutlineGithub />
				</a>
				<Link to='/'>
					<AiOutlineLink />
				</Link>
			</figcaption>
		</figure>
	);
};

export default ProjectCard;
