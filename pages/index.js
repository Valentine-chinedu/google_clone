import Head from "next/head";

import Header from "../components/indexpagecomponents/Header";
import Body from "../components/indexpagecomponents/Body";
import Footer from "../components/indexpagecomponents/Footer";

export default function Home() {
	return (
		<div className="flex flex-col justify-between h-screen font-sans">
			<Head>
				<title>Google clone</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{/* header */}
			<Header />

			{/* body */}

			<Body />

			{/* footer */}
			<Footer />
		</div>
	);
}
