import styled from 'styled-components';
import Image from 'next/image';
import CustomBtn from '../button/Button';
import { FaGithub, FaFile } from 'react-icons/fa';

const Wrapper = styled.div`
	padding-top: 129px;
`;

const BtnContainer = styled.div`
	display: flex;
	margin-top: 80px;
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
				<CustomBtn icon={<FaGithub />} variant={'primary'}>
					Github
				</CustomBtn>
			</BtnContainer>
		</Wrapper>
	);
};

export default HeroBanner;
