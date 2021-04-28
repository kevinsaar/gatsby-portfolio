import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import './About.scss';
import SkillsSVG from './SkillsSVG';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

const About = () => {
	const data = useStaticQuery(graphql`
		query AboutSection {
			allContentfulHomepage {
				nodes {
					aboutSectionTitle {
						normal
						colorful
					}
					aboutMeContent {
						raw
					}
					cv {
						title
						file {
							url
						}
					}
				}
			}
		}
	`);

	const {
		aboutSectionTitle,
		aboutMeContent,
		cv,
	} = data.allContentfulHomepage.nodes[0];

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
					<div className='content'>
						{aboutSectionTitle && (
							<h2>
								{aboutSectionTitle.normal}
								<b> {aboutSectionTitle.colorful}</b>
							</h2>
						)}
						{aboutMeContent && renderRichText(aboutMeContent)}
						{cv && <Link to={cv.file.url}>{cv.title}</Link>}
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
