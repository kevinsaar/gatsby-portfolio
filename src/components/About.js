import React from 'react';
import './About.scss';
import SkillsSVG from './SkillsSVG';
import pdf from '../../static/CV-Kevin-Saar.pdf';

const About = () => {
	return (
		<section className='about'>
			<div className='max-width'>
				<div className='container'>
					<span className='section-back'>
						<span>A</span>
						<span>B</span>
						<span>O</span>
						<span>U</span>
						<span>T</span>
					</span>
					<SkillsSVG />
					<div className='text'>
						<h2>
							About <b>me</b>
						</h2>
						<p>
							I'm a front-end web developer with{' '}
							<b>1 year of work experience</b> based in Tallinn, Estonia.
						</p>
						<p>
							Strongest weapons I have in my arsenal right now are <b>SCSS</b>{' '}
							and <b>HTML</b> sprinkled with some JavaScript. Nowadays you can't
							be seen without <b>ReactJS</b> so I'm slowly adding that in as
							well. Honorable mentions include WordPress, Git, GitHub and npm.
						</p>
						<ul className='skills'>
							<li>HTML</li>
							<li>SCSS</li>
							<li>ReactJS</li>
							<li>JavaScript</li>
							<li>WordPress</li>
							<li>Git</li>
							<li>GitHub</li>
							<li>NPM</li>
						</ul>
						<p>
							At the moment <b>looking for working opportunities</b>. If you
							might be interested have a look at my CV or contact by any means.
						</p>
						<a href={pdf} target='_blank' rel='noreferrer'>
							Look at CV
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
