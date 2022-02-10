import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	width: 80%;
	border: solid 2px red;
	margin-top: 354px;
`;

const HeadingWrapper = styled.div``;

const ContentWrapper = styled.div`
	background-color: var(--color-secondary);
`;

const TextContainer = styled.div`
	color: var(--color-white);

	h3 {
		font-size: var(--font-size-lg);
		font-weight: 600;
	}

	p {
		font-size: 20px;
	}
`;

const Projects = () => {
	const projectList = [
		{
			title: 'E-Commerce Site / Bike Shop',
			description:
				'I am a freshly graduated Front-end Developer from Noroff. I have played 16 years as a pro handballer for club called Haslum Hk. I wanted to leave a footprint in the world so i fell in love with Front-end Development. The 2 years i studied i enjoyed creating cool & functional things.',
		},
	];

	return (
		<Wrapper>
			<HeadingWrapper>
				<p className="headingText">
					02 <span>PRJOECTS</span>
				</p>
			</HeadingWrapper>
			<ContentWrapper>
				{projectList.map(({ title, description }) => (
					<TextContainer key={title}>
						<h3>{title}</h3>
						<p>{description}</p>
					</TextContainer>
				))}
			</ContentWrapper>
		</Wrapper>
	);
};

export default Projects;
