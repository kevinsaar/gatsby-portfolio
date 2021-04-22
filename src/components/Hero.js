import React from 'react';
import './Hero.scss';
import SocialLinks from './SocialLinks';
import HeroSVG from './HeroSVG';
import Typical from 'react-typical';

const Hero = () => {
	return (
		<section className='hero'>
			<HeroSVG />
			<div className='max-width'>
				<div className='container'>
					<h2>Kevin Saar</h2>
					<h1>Frontend developer</h1>
					<p>
						I am a motivated front-end web developer who specializes in
						developing websites that are{' '}
						<Typical
							steps={['impactful!', 3000, 'engaging!', 3000, 'stunning!', 3000]}
							loop={Infinity}
							wrapper='span'
						/>
					</p>
					<SocialLinks
						github='https://github.com/kevinsaar'
						mail='kevinolisiin@gmail.com'
						linkedIn='https://www.linkedin.com/in/kevin-saar/'
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
