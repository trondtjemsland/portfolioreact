import React from 'react';
import CustomBtn from '../button/Button';
import { Wrapper, Text } from './/style.contact';
import { FaEnvelope } from 'react-icons/fa';

function Contact() {
	return (
		<Wrapper>
			<Text id="contact">
				<span>DONT</span> HESITATE
			</Text>
			<Text>
				<span>TO</span> CONTACT <span>ME</span>
			</Text>
			<a href="mailto:someone@example.com">
				<CustomBtn icon={<FaEnvelope />}>EMAIL</CustomBtn>
			</a>
		</Wrapper>
	);
}

export default Contact;
