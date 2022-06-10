import styled from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
	width: 70%;
	margin: 80px auto;
	${media.lessThan('large')`
	margin: 80px auto;

		`}
`;

export const Text = styled.h1`
	font-size: var(--font-size-xxl);
	font-weight: 900;
	letter-spacing: 10px;

	${media.lessThan('large')`

	font-size: var(--font-size-xl);
		`}
`;
