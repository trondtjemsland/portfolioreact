import styled from 'styled-components';
import Image from 'next/image';
import CustomBtn from '../button/Button';
import { FaGithub, FaFile } from 'react-icons/fa';
import media from 'styled-media-query';

const Wrapper = styled.div`
	padding-top: 129px;
	.imageContainer {
		width: 100%;
		height: 200px;
		padding: 10px;
	}
	${media.lessThan('large')`
		.imageContainer {
			width:90%;
		}
		`}
`;

const BtnContainer = styled.div`
	display: flex;
	margin-top: 80px;
`;

const HeroBanner = () => {
	return (
		<Wrapper>
			<div className="imageContainer">
				<Image
					alt="herobanner"
					src="/images/herobanner.png"
					width={1000}
					height={200}></Image>
			</div>

			<BtnContainer>
				<CustomBtn icon={<FaFile />}>CV </CustomBtn>
				<CustomBtn icon={<FaGithub />} variant={'primary'}>
					Github
				</CustomBtn>
			</BtnContainer>
		</Wrapper>
	);
};

export default HeroBanner;
