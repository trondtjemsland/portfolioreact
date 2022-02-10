import React from 'react';
import { Wrapper, Primary, Icon } from './style';

function CustomBtn({ children, variant, icon }) {
	if (variant === 'primary') {
		return (
			<Primary>
				<Icon>{icon}</Icon>
				<p>{children}</p>
			</Primary>
		);
	}

	return (
		<Wrapper>
			<Icon>{icon}</Icon>
			<p>{children}</p>
		</Wrapper>
	);
}

export default CustomBtn;
