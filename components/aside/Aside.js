import styled from 'styled-components';
import media from 'styled-media-query';

const Aside = styled.aside`
	flex: 0 0 15%;

	${media.greaterThan('large')`
		flex: 0 0 15%;
	`}
	${media.lessThan('medium')`
		flex: 0 0 5%;
	`}
`;

export default Aside;
