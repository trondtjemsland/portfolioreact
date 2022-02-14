import React from 'react';
import { Wrapper, Primary, Icon } from './style';
import Link from 'next/link';

function CustomBtn({ children, variant, icon }) {
	if (variant === 'primary') {
		return (
			<Primary>
				<Icon>{icon}</Icon>
				<Link href="https://github.com/trondtjemsland" passHref>
					<a>{children}</a>
				</Link>
			</Primary>
		);
	}

	return (
		<Wrapper>
			<Icon>{icon}</Icon>
			<a>{children}</a>
		</Wrapper>
	);
}

export default CustomBtn;
