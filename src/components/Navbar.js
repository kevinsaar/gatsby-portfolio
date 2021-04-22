import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import SocialLinks from './SocialLinks';
import './Navbar.scss';

const navStyle = {
	backgroundColor: 'rgb(255, 255, 255, 0.85)',
	boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 5px 2px',
};

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

	return (
		<nav className='navbar' style={pageYOffset > 10 ? navStyle : null}>
			<div className='max-width'>
				<SocialLinks
					github='https://github.com/kevinsaar'
					mail='kevinolisiin@gmail.com'
					linkedIn='https://www.linkedin.com/in/kevin-saar/'
				/>
				<ul className='menu'>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/projects'>Projects</Link>
					</li>
					<li>
						<Link to='/contact'>Contact</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
