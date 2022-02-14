import styled from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
	margin: 150px 0 150px 0;
	width: 80%;
	${media.lessThan('large')`
	margin:100px 0 100px 0;

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
