import React from 'react';
import { Wrapper, Nav, NavItem, Logo } from './style';
import Link from 'next/link';

function Header() {
	const navList = [
		{
			link: '#about',
			title: '01 About',
		},
		{
			link: '#projects',
			title: '02 Projects',
		},
		{
			link: '#contact',
			title: '03 Contact',
		},
	];

	return (
		<Wrapper>
			<Link href="/" passHref>
				<Logo>tjems</Logo>
			</Link>

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
