import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { FaGithub, FaJsSquare } from 'react-icons/fa';

const Wrapper = styled.div`
	margin-top: 354px;
`;

const HeadingWrapper = styled.div``;

const ContentWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 1027px;
	height: 377px;
	background-color: var(--color-secondary);
	padding: 35px;
`;

const TextContainer = styled.div`
	width: 80%;
	color: var(--color-white);

	h3 {
		font-size: var(--font-size-lg);
		font-weight: 700;
		padding-bottom: 10px;
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
				'This was the first semester project of the second year. We were told to design and build a e-commerce site, we had 5 weeks to design and code the site. It is made for desktop, tablet and mobile. ',
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
				<Image
					height={220}
					width={396}
					alt="Mockup of laptop with picture of website"
					src={'/images/project1.png'}></Image>
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
