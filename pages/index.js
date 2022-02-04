import styles from '../styles/Home.module.css';
import Head from 'next/head';

import Body from '../components/body/Body';
import Header from '../components/header/Header';
import Main from '../components/main/Main';
import Herobanner from '../components/herobanner/Herobanner';
import Aside from '../components/aside/Aside';

export default function Home() {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Body>
				<Aside></Aside>

				<Main>
					<Header>
						<p>Nav goes here</p>
					</Header>
					<Herobanner></Herobanner>
				</Main>
			</Body>
		</>
	);
}
