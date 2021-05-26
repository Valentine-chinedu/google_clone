import { MdSearch } from "react-icons/md";
import { CgPlayButtonR } from "react-icons/cg";
function HeaderOptions() {
	return (
		<div className="sticky flex items-center pl-52  border-b space-x-64">
			<div className="flex justify-between items-start space-x-7 text-gray-700 text-xl ">
				<div className="">
					<button className="flex items-center text-blue-600 mb-3 text-lg">
						<MdSearch className="text-2xl mr-1" />
						All
					</button>
					<div className="bg-blue-600 h-1"></div>
				</div>
				<a className="flex items-center text-lg" href="">
					<svg className="h-5 mr-2" focusable="false" viewBox="0 0 24 24">
						<path d="M14 13l4 5H6l4-4 1.79 1.78L14 13zm-6.01-2.99A2 2 0 0 0 8 6a2 2 0 0 0-.01 4.01zM22 5v14a3 3 0 0 1-3 2.99H5c-1.64 0-3-1.36-3-3V5c0-1.64 1.36-3 3-3h14c1.65 0 3 1.36 3 3zm-2.01 0a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h7v-.01h7a1 1 0 0 0 1-1V5"></path>
					</svg>
					Images
				</a>

				<a className="flex items-center text-lg" href="">
					<CgPlayButtonR className="mr-1.5" />
					Videos
				</a>

				<a className="flex items-center text-lg" href="">
					<svg className="h-5 mr-2" focusable="false" viewBox="0 0 24 24">
						<path d="M12 11h6v2h-6v-2zm-6 6h12v-2H6v2zm0-4h4V7H6v6zm16-7.22v12.44c0 1.54-1.34 2.78-3 2.78H5c-1.64 0-3-1.25-3-2.78V5.78C2 4.26 3.36 3 5 3h14c1.64 0 3 1.25 3 2.78zM19.99 12V5.78c0-.42-.46-.78-1-.78H5c-.54 0-1 .36-1 .78v12.44c0 .42.46.78 1 .78h14c.54 0 1-.36 1-.78V12zM12 9h6V7h-6v2"></path>
					</svg>
					News
				</a>

				<button className="flex items-center text-lg">
					<svg
						className="h-5 mr-0.5"
						focusable="false"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
					>
						<path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
					</svg>
					More
				</button>
			</div>
			<div className="flex items-start h-12 space-x-6 text-gray-700 text-lg">
				<a href="">Settings</a>
				<button>Tools</button>
			</div>
		</div>
	);
}

export default HeaderOptions;
