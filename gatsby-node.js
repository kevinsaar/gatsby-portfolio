const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
	const { data } = await graphql(`
		query Projects {
			allContentfulProject {
				nodes {
					slug
					title
					categories {
						title
					}
					logo {
						gatsbyImageData(
							placeholder: BLURRED
							layout: FULL_WIDTH
							formats: [AUTO, WEBP]
						)
					}
					featuredImage {
						gatsbyImageData(
							placeholder: BLURRED
							layout: FULL_WIDTH
							formats: [AUTO, WEBP]
						)
					}
					description {
						childMarkdownRemark {
							html
						}
					}
					excerpt {
						excerpt
						childMarkdownRemark {
							html
						}
					}
					imageGallery {
						gatsbyImageData(
							placeholder: BLURRED
							layout: FULL_WIDTH
							formats: [AUTO, WEBP]
						)
						title
						id
					}
					finishDate
					projectSiteUrl
					githubCodeUrl
				}
			}
		}
	`);

	data.allContentfulProject.nodes.forEach((node) => {
		actions.createPage({
			path: `/projects/${node.slug}`,
			component: path.resolve('./src/templates/project-details.js'),
			context: { node },
		});
	});
};
