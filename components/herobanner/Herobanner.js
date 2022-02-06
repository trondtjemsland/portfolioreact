import styled from 'styled-components';
import Image from 'next/image';

const Wrapper = styled.div`
	width: 100%;
	padding-top: 300px;
	padding-left: 140px;
`;

const HeroBanner = () => {
	return (
		<Wrapper>
			<Image
				alt="herobanner"
				src="/images/herobanner.png"
				height={320}
				width={1800}></Image>
		</Wrapper>
	);
};

export default HeroBanner;
