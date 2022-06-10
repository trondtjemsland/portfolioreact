import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	color: var(--color-white);
	width: 80%;
	margin: auto;

	padding-top: 182px;

	.aboutText {
		padding-top: 36px;
		font-size: 24px;
		font-weight: 500;
		line-height: 36px;
		letter-spacing: 0.015em;
	}
`;

const AboutSection = () => {
	return (
		<Wrapper id="about">
			<p className="headingText">
				<span>01</span> ME
			</p>
			<p className="aboutText">
				I am a freshly graduated Front-end Developer from Noroff. I have played
				16 years as a pro handballer for a club called Haslum hk. I wanted to
				leave a footprint in the world so i fell in love with Front-end
				Development. The 2 years i have studied i enjoyed creating cool and
				functional things.
			</p>
		</Wrapper>
	);
};

export default AboutSection;
