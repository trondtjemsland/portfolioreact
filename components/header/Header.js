import React from 'react';
import { Wrapper, Nav, NavItem, Logo } from './style';

function Header() {
	const navList = [
		{
			link: '#about',
			title: '01 About',
		},
		{
			link: '#contact',
			title: '02 Contact',
		},
		{
			link: '#projects',
			title: '03 Projects',
		},
	];

	return (
		<Wrapper>
			<Logo>tjems</Logo>
			<Nav>
				{navList.map(({ link, title }) => (
					<NavItem key={link}>
						<a href={link}>{title}</a>
					</NavItem>
				))}
			</Nav>
		</Wrapper>
	);
}

export default Header;
