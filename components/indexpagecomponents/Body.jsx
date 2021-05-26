import { MdSearch } from "react-icons/md";

import Image from "next/image";
import { useRef } from "react";
import { useRouter } from "next/router";

function Body() {
	const router = useRouter();
	const searchInputRef = useRef(null);

	const search = (e) => {
		e.preventDefault();
		const term = searchInputRef.current.value;

		if (!term) return;

		router.push(`/search?term=${term}`);
	};

	return (
		<div className="relative flex flex-col justify-center items-center space-y-10 bottom-12">
			<div className="flex justify-center ">
				<Image
					src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
					alt="google image"
					width={315}
					height={115}
				/>
			</div>

			<form
				onSubmit={search}
				className=" flex justify-between items-center border border-gray-300 rounded-full px-5 py-2 h-[3.5rem] min-w-[48rem] max-w-[48rem] hover:shadow-md focus-within:shadow-md"
			>
				<MdSearch className="text-2xl text-gray-400 mr-2" />

				<input
					ref={searchInputRef}
					className=" w-[40rem] text-xl text-gray-700 focus:outline-none mr-2"
					type="text"
				/>

				<svg
					className="h-7"
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
			</form>

			<span className="flex space-x-4 p-4">
				<button
					onClick={search}
					className="bg-gray-50 text-gray-600 py-1.5 px-5 rounded-lg hover:bg-gray-100 text-md"
				>
					Google Search
				</button>
				<button
					onClick={search}
					className="bg-gray-50 text-gray-600 py-1.5 px-5 rounded-lg hover:bg-gray-100 text-md"
				>
					I'm Feeling Lucky
				</button>
			</span>
			<div className=" top-18 space-x-3">
				<span className="text-md">Google offered in:</span>
				<span className="text-blue-800">Hausa</span>
				<span className="text-blue-800">Igbo</span>
				<span className="text-blue-800">Ede Yoruba</span>
				<span className="text-blue-800">Nigerian</span>
				<span className="text-blue-800">Pidgin</span>
			</div>
		</div>
	);
}

export default Body;
