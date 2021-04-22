import React from 'react';
import { Link } from 'gatsby';
import './LatestProjects.scss';
//import ProjectCard from './ProjectCard';

const LatestProjects = () => {
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
						Latest <b>projects</b>
					</h2>
					<div className='latest-wrap'>
						{/*<ProjectCard project={project} />
						<ProjectCard project={project} />*/}
					</div>
					<Link to='/projects'>All projects</Link>
				</div>
			</div>
		</section>
	);
};

export default LatestProjects;
