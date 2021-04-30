import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import './About.scss';
import SkillsSVG from './SkillsSVG';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { GatsbyImage } from 'gatsby-plugin-image';

const options = {
	renderNode: {
		[BLOCKS.EMBEDDED_ASSET]: ({ data: { target } }) =>
			target.gatsbyImageData ? (
				<GatsbyImage image={target.gatsbyImageData} alt={target.title} />
			) : (
				<a href={target.file.url} target='_blank' rel='noreferrer'>
					Link to {target.title}
				</a>
			),
		[INLINES.ASSET_HYPERLINK]: ({ data: { target } }, children) => (
			<a href={target.file.url} target='_blank' rel='noreferrer'>
				{children}
			</a>
		),
		[INLINES.ENTRY_HYPERLINK]: ({ data: { target } }, children) => (
			<Link to={`/projects/${target.slug}`}>{children}</Link>
		),
	},
};

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
						references {
							... on ContentfulAsset {
								contentful_id
								__typename
								title
								file {
									url
								}
								gatsbyImageData(
									placeholder: BLURRED
									layout: FULL_WIDTH
									formats: [AUTO, WEBP]
								)
							}
						}
					}
				}
			}
		}
	`);

	const {
		aboutSectionTitle,
		aboutMeContent,
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
						{aboutMeContent && renderRichText(aboutMeContent, options)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
