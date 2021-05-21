import Head from "next/head";
import { useRouter } from "next/router";
import { API_KEY, CONTEXT_KEY } from "../ApiKeys";
import Response from "../Response";
import SearchResults from "../components/searchpagecomponents/SearchResults";

import Header from "../components/searchpagecomponents/Header";

import HeaderOptions from "../components/searchpagecomponents/HeaderOptions";

const search = ({ results }) => {
	console.log(results);
	const router = useRouter();

	return (
		<div className="font-serif">
			<Head>
				<title>{router.query.term} - Google Search</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{/* header */}

			<header className="">
				<Header />

				<HeaderOptions />
			</header>

			<SearchResults results={results} />
		</div>
	);
};

export async function getServerSideProps(context) {
	const useDummyDAta = true;
	const startIndex = context.query.start || "0";

	// Fetch data from external API
	const data = useDummyDAta
		? Response
		: await fetch(
				`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
		  ).then((res) => res.json());

	// pass the result to the client..
	return {
		props: {
			results: data,
		},
	};
}

export default search;
