import styled from 'styled-components';

export const Icon = styled.span`
	margin-right: 10px;
	flex: 0 0 auto;
	color: white;
	font-size: 35px;
`;

export const Wrapper = styled.div`
	cursor: pointer;
	border-radius: 5px;
	margin-right: 30px;
	width: 214px;
	height: 72px;
	background-color: var(--color-tertiary);
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;

	a,
	p {
		text-decoration: none;
		color: var(--color-white);
		font-size: 22px;
		font-weight: bold;
		flex: 0 1 auto;
	}
`;
export const Primary = styled.div`
	cursor: pointer;
	border-radius: 5px;
	width: 214px;
	height: 72px;
	background: none;
	border: solid 2px var(--color-white);
	display: flex;
	align-items: center;
	justify-content: center;

	a {
		text-decoration: none;
		color: var(--color-white);
		font-size: 22px;
		font-weight: bold;
	}
`;
