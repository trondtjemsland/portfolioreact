import styled from 'styled-components';
import media from 'styled-media-query';

const Aside = styled.aside`
	flex: 0 0 260px;

	${media.lessThan('large')`
		flex: 0 0 120px
	`}
`;

export default Aside;
