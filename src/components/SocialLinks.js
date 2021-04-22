import React from 'react';
import { SiGithub, SiGmail, SiLinkedin } from 'react-icons/si';
import './SocialLinks.scss';

const SocialLinks = ({ github, mail, linkedIn }) => {
	return (
		<div className='social-links'>
			<a
				href={github}
				target='_blank'
				rel='noreferrer'
				aria-label='Github profile'
			>
				<SiGithub />
			</a>
			<a
				href={'mailto:' + mail}
				target='_blank'
				rel='noreferrer'
				aria-label='Send e-mail'
			>
				<SiGmail />
			</a>
			<a
				href={linkedIn}
				target='_blank'
				rel='noreferrer'
				aria-label='LinkedIn profile'
			>
				<SiLinkedin />
			</a>
		</div>
	);
};

export default SocialLinks;
