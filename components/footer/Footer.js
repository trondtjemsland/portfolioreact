import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Wrapper = styled.div`
	background-image: url('images/footer.png');
	background-size: cover;
	background-repeat: no-repeat;
	height: 300px;
	background-position: center top;
	position: relative;

	.ImageWrapper {
		position: absolute;
		right: 40px;
		bottom: 0px;
		width: 474px;
		height: 400px;
	}
`;

const FooterImage = styled(Image)`
	object-fit: cover;
	object-position: center center;
`;

export default function Footer() {
	return (
		<Wrapper>
			<div className="ImageWrapper">
				<FooterImage
					src={'/images/footerhand.png'}
					alt="image of a hand"
					layout="fill"></FooterImage>
			</div>
		</Wrapper>
	);
}
