import styled from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
	width: 90%;
	margin: auto;
	flex: 0 0 200px;
	height: 60px;
	display: flex;
	justify-content: space-between;
	align-items: center;

	${media.lessThan('large')`
		flex-direction:row;
		flex-wrap:wrap;
		align-content:stretch;
		justify-content:space-between;
		align-items:center;	
		display:flex;
	`}
`;

export const Nav = styled.nav`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 90%;
	max-width: 563px;
`;

export const NavItem = styled.div`
	font-weight: bold;
	text-transform: uppercase;

	a {
		font-size: 22px;
		color: var(--color-white);
		text-decoration: none;
	}
`;

export const Logo = styled.a`
	font-family: var(--font-logo);
	font-size: 54px;
	text-decoration: none;
	color: var(--color-white);
`;
