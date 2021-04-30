import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

const ProjectDetails = ({ pageContext: { node: project } }) => {
	console.log(project);
	return (
		<Layout>
			<Seo
				title={
					project.title && `${project.title} - Kevin Saar | Frontend developer`
				}
				description={project.excerpt && project.excerpt.excerpt}
			/>

			<main
				style={{ display: 'grid', minHeight: '100vh', placeContent: 'center' }}
			>
				<h1>{project.title}</h1>
				<p>Finish Date: {project.finishDate}</p>
				<a href={project.projectSiteUrl}>Webpage</a>
			</main>
		</Layout>
	);
};
export default ProjectDetails;
