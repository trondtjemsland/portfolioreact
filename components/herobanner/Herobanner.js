import styled from 'styled-components';
import Image from 'next/image';
import CustomBtn from '../button/Button';
import { FaGithub, FaFile } from 'react-icons/fa';

const Wrapper = styled.div`
	width: 100%;
	padding-top: 129px;
`;

const BtnContainer = styled.div`
	display: flex;
	margin: 10px;
`;

const HeroBanner = () => {
	return (
		<Wrapper>
			<Image
				alt="herobanner"
				src="/images/herobanner.png"
				height={220}
				width={1077}></Image>
			<BtnContainer>
				<CustomBtn icon={<FaFile />}>CV </CustomBtn>
				<CustomBtn variant={'primary'}>
					Github <FaGithub />
				</CustomBtn>
			</BtnContainer>
		</Wrapper>
	);
};

export default HeroBanner;
