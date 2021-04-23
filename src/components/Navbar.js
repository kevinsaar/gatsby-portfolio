import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
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

	return (
		<nav className={`navbar ${pageYOffset > 10 ? 'moved' : ''}`}>
			<div className='max-width'>
				<SocialLinks
					github='https://github.com/kevinsaar'
					mail='kevinolisiin@gmail.com'
					linkedIn='https://www.linkedin.com/in/kevin-saar/'
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
