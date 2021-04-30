import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import './Hero.scss';
import SocialLinks from './SocialLinks';
import HeroSVG from './HeroSVG';
import Typical from 'react-typical';

const Hero = () => {
	const data = useStaticQuery(graphql`
		query HeroSection {
			allContentfulHomepage {
				nodes {
					name
					title
					shortDescription {
						shortDescription
					}
					changingWords
					socialLinks {
						gitHub
						linkedIn
						email
					}
				}
			}
		}
	`);

	const {
		name,
		title,
		shortDescription,
		changingWords,
		socialLinks,
	} = data.allContentfulHomepage.nodes[0];

	return (
		<section className='hero'>
			<HeroSVG />
			<div className='max-width'>
				<div className='container'>
					<h2>{name}</h2>
					<h1>{title}</h1>
					<p>
						{shortDescription && shortDescription.shortDescription}{' '}
						{changingWords && changingWords.length === 3 && (
							<Typical
								steps={[
									`${changingWords[0]}`,
									3000,
									`${changingWords[1]}`,
									3000,
									`${changingWords[2]}`,
									3000,
								]}
								loop={Infinity}
								wrapper='span'
							/>
						)}
					</p>
					{socialLinks && (
						<SocialLinks
							github={socialLinks.gitHub}
							mail={socialLinks.email}
							linkedIn={socialLinks.linkedIn}
						/>
					)}
				</div>
			</div>
		</section>
	);
};

export default Hero;
