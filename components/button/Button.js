import React from 'react';
import { Wrapper, Primary, Icon } from './style';

function CustomBtn({ children, variant, icon }) {
	if (variant === 'primary') {
		return (
			<Primary>
				<p>{children}</p>
			</Primary>
		);
	}

	return (
		<Wrapper>
			<p>{children}</p>
			<Icon>{icon}</Icon>
		</Wrapper>
	);
}

export default CustomBtn;
