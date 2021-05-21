import Link from "next/link";
import { useRouter } from "next/router";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const SearchResults = ({ results }) => {
	const router = useRouter();

	const startIndex = Number(router.query.start) || 0;

	console.log(results.items);

	return (
		<div className="mx-auto w-full px-3 pl-[5%] md:pl-[14%]">
			<p className="text-gray-600 text-md mb-5 mt-3">
				About {results.searchInformation?.formattedTotalResults} results (
				{results.searchInformation?.formattedSearchTime} seconds)
			</p>

			{results.items?.map((result) => {
				return (
					<div key={result.link} className="max-w-xl mb-8">
						<div className="group">
							<a href={result.link}>{result.formattedUrl}</a>
							<a href={result.link}>
								<h2 className="truncate text-xl text-blue-800 font-medium group-hover:underline">
									{result.title}
								</h2>
							</a>
						</div>

						<p className="line-clamp-2">{result.snippet}</p>
					</div>
				);
			})}

			{/* pagination */}

			<div className="flex justify-between text-blue-700 mb-10">
				{startIndex >= 10 && (
					<Link
						href={`/search?term=${router.query.term}&start=${startIndex - 10}`}
					>
						<div className="flex flex-grow flex-col items-center cursor-pointer hover:underline">
							<MdKeyboardArrowLeft className="h-5" />
							<p>Previous</p>
						</div>
					</Link>
				)}

				<Link
					href={`/search?term=${router.query.term}&start=${startIndex + 10}`}
				>
					<div className="flex flex-grow flex-col items-center cursor-pointer hover:underline">
						<MdKeyboardArrowRight className="h-5" />
						<p>Next</p>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default SearchResults;
