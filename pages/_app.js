import '../styles/globals.css';
import GlobalStyle from '../styles/globals';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head></Head>
			<GlobalStyle />
			<Component {...pageProps} />;
		</>
	);
}

export default MyApp;
