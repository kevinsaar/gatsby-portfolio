import React, { useState, useEffect } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import SocialLinks from './SocialLinks';
import './Navbar.scss';

const Navbar = () => {
	const [pageYOffset, setpageYOffset] = useState(null);

	const listenToScroll = () => {
		setpageYOffset(window.pageYOffset);
	};

	useEffect(() => {
		window.addEventListener('scroll', listenToScroll);
		return () => {
			window.removeEventListener('scroll', listenToScroll);
		};
	}, [pageYOffset]);

	const { contentfulSocialLinks: social } = useStaticQuery(graphql`
		query NavSocial {
			contentfulSocialLinks {
				gitHub
				email
				linkedIn
			}
		}
	`);

	return (
		<nav className={`navbar ${pageYOffset > 10 ? 'moved' : ''}`}>
			<div className='max-width'>
				<SocialLinks
					github={social.gitHub}
					mail={social.email}
					linkedIn={social.linkedIn}
				/>
				<ul className='menu'>
					<li>
						<Link to='/' activeClassName='active'>
							Home
						</Link>
					</li>
					<li>
						<Link to='/projects' activeClassName='active'>
							Projects
						</Link>
					</li>
					<li>
						<Link to='/contact' activeClassName='active'>
							Contact
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
