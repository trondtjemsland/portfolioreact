import React from 'react';
import CustomBtn from '../button/Button';
import { Wrapper, Text } from './/style.contact';
import { FaEnvelope } from 'react-icons/fa';

function Contact() {
	return (
		<Wrapper>
			<Text>
				<span>DONT</span> HESITATE
			</Text>
			<Text>
				<span>TO</span> CONTACT <span>ME</span>
			</Text>
			<CustomBtn icon={<FaEnvelope />}>EMAIL </CustomBtn>
		</Wrapper>
	);
}

export default Contact;
