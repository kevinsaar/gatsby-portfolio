import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

const ProjectDetails = ({ pageContext: { node: project } }) => {
	console.log(project.imageGallery);
	return (
		<Layout>
			<Seo
				title={
					project.title && `${project.title} - Kevin Saar | Frontend developer`
				}
				description={project.excerpt && project.excerpt.excerpt}
			/>

			<main
				className='project-main'
				style={{ display: 'grid', paddingTop: '200px' }}
			>
				<div className='max-width'>
					<div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
						<h1>{project.title}</h1>
						<p>Finish Date: {project.finishDate}</p>
						<a href={project.projectSiteUrl}>Webpage</a>
					</div>
					<div
						className='container'
						style={{
							display: 'grid',
							gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
							gap: '40px',
							marginTop: '100px',
						}}
					>
						<div
							className='project-content'
							dangerouslySetInnerHTML={{
								__html: project.description.childMarkdownRemark.html,
							}}
						></div>
						<div
							className='img-gallery'
							style={{
								display: 'grid',
								gridTemplateColumns: 'repeat(2, 1fr)',
								gap: '10px',
							}}
						>
							{project.imageGallery.map((img) => (
								<GatsbyImage
									image={img.gatsbyImageData}
									alt={img.title}
									key={img.id}
								/>
							))}
						</div>
					</div>
				</div>
			</main>
		</Layout>
	);
};
export default ProjectDetails;
