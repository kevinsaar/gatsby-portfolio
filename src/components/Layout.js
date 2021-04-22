import React from 'react';
import Navbar from './Navbar';
import '../styles/global.scss';

const Layout = ({ children }) => {
	return (
		<div className='layout'>
			<Navbar />
			{children}
		</div>
	);
};

export default Layout;
