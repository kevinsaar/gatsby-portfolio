module.exports = {
	siteMetadata: {
		title: 'Kevin Saar | Frontend developer',
		description:
			'A portfolio site for a frontend developer using Gatsby. Check it out!',
	},
	plugins: [
		'gatsby-plugin-sass',
		'gatsby-plugin-gatsby-cloud',
		'gatsby-plugin-image',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sitemap',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				icon: 'src/images/icon.png',
			},
		},
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/images/',
			},
			__key: 'images',
		},
	],
};
