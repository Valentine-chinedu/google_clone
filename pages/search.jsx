import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Response from "../Response";
import SearchResults from "../components/searchpagecomponents/SearchResults";
import HeaderOptions from "../components/searchpagecomponents/HeaderOptions";

import { BsGrid3X3Gap } from "react-icons/bs";
import { MdSearch } from "react-icons/md";
import { useRef } from "react";

const API_KEY = process.env.API_KEY;
const CONTEXT_KEY = process.env.CONTEXT_KEY;

const search = ({ results }) => {
	const router = useRouter();
	const searchInputRef = useRef(null);

	const searchInput = (e) => {
		e.preventDefault();
		const term = searchInputRef.current.value;

		if (!term) return;

		router.push(`/search?term=${term}`);
	};

	return (
		<div className="font-serif">
			<Head>
				<title>{router.query.term} - Google Search</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{/* header */}

			<header className=" bg-white z-50 w-full  fixed">
				<div className="flex justify-between p-8 ">
					<div className="flex items-center space-x-10 w-full mr-[45rem]">
						<div className="flex flex-shrink-0 items-center h-full cursor-pointer">
							<Image
								onClick={() => router.push("/")}
								src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
								alt="google image"
								width={120}
								height={40}
							/>
						</div>
						<form
							onSubmit={searchInput}
							className="flex flex-grow min-w-[54rem] max-w-[54rem] justify-between items-center border border-gray-200 rounded-full px-5 py-2 h-[3.7rem] shadow-md hover:shadow-lg focus-within:shadow-md"
						>
							<input
								ref={searchInputRef}
								className="flex flex-grow max-w-2xl text-xl text-gray-700 focus:outline-none h-full"
								type="text"
								defaultValue={router.query.term}
							/>
							<div
								className="cursor-pointer h-9 text-gray-500 flex items-center
						    pr-4 border-r border-gray-300"
							></div>

							{/* microphone icon */}
							<div>
								<svg
									className="h-7 cursor-pointer"
									focusable="false"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"
										fill="#4285f4"
									></path>
									<path d="m11 18.08h2v3.92h-2z" fill="#34a853"></path>
									<path
										d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"
										fill="#f4b400"
									></path>
									<path
										d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"
										fill="#ea4335"
									></path>
								</svg>
							</div>
							<div className="cursor-pointer" onClick={searchInput}>
								<MdSearch className="text-3xl text-blue-600" />
							</div>
						</form>
					</div>
					<div className="flex items-center space-x-7 flex-shrink-0 ">
						<button>
							<BsGrid3X3Gap className="text-2xl text-gray-600" />
						</button>

						{/* Avatar */}
						<div>
							<Image
								className="rounded-full object-cover"
								height={45}
								width={45}
								src="/person-1.jpeg"
								alt="avatar"
							/>
						</div>
					</div>
				</div>

				<HeaderOptions />
			</header>

			<SearchResults results={results} />
		</div>
	);
};

export async function getServerSideProps(context) {
	const useDummyDAta = false;
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
