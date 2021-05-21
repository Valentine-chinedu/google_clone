import { MdSearch } from "react-icons/md";

function HeaderOptions() {
	return (
		<div>
			<div className="flex items-center pl-52  border-b space-x-24">
				<div className="flex justify-between items-start space-x-6 text-gray-700 text-xl ">
					<div className="">
						<button className="flex items-center text-blue-600 mb-3">
							<MdSearch className="text-2xl mr-1" />
							All
						</button>
						<div className="bg-blue-600 h-1"></div>
					</div>
					<a className="flex items-center" href="">
						<svg className="h-5 mr-2" focusable="false" viewBox="0 0 24 24">
							<path d="M14 13l4 5H6l4-4 1.79 1.78L14 13zm-6.01-2.99A2 2 0 0 0 8 6a2 2 0 0 0-.01 4.01zM22 5v14a3 3 0 0 1-3 2.99H5c-1.64 0-3-1.36-3-3V5c0-1.64 1.36-3 3-3h14c1.65 0 3 1.36 3 3zm-2.01 0a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h7v-.01h7a1 1 0 0 0 1-1V5"></path>
						</svg>
						Images
					</a>

					<a className="flex items-center" href="">
						<svg className="h-5 mr-2" focusable="false" viewBox="0 0 24 24">
							<path d="M12 11h6v2h-6v-2zm-6 6h12v-2H6v2zm0-4h4V7H6v6zm16-7.22v12.44c0 1.54-1.34 2.78-3 2.78H5c-1.64 0-3-1.25-3-2.78V5.78C2 4.26 3.36 3 5 3h14c1.64 0 3 1.25 3 2.78zM19.99 12V5.78c0-.42-.46-.78-1-.78H5c-.54 0-1 .36-1 .78v12.44c0 .42.46.78 1 .78h14c.54 0 1-.36 1-.78V12zM12 9h6V7h-6v2"></path>
						</svg>
						News
					</a>
					<a className="flex items-center" href="">
						<svg className="h-5 mr-2" focusable="false" viewBox="0 0 16 16">
							<path d="M7.503 0c3.09 0 5.502 2.487 5.502 5.427 0 2.337-1.13 3.694-2.26 5.05-.454.528-.906 1.13-1.358 1.734-.452.603-.754 1.508-.98 1.96-.226.452-.377.829-.904.829-.528 0-.678-.377-.905-.83-.226-.451-.527-1.356-.98-1.959-.452-.603-.904-1.206-1.356-1.734C3.132 9.121 2 7.764 2 5.427 2 2.487 4.412 0 7.503 0zm0 1.364c-2.283 0-4.14 1.822-4.14 4.063 0 1.843.86 2.873 1.946 4.177.468.547.942 1.178 1.4 1.79.34.452.596.99.794 1.444.198-.455.453-.992.793-1.445.459-.61.931-1.242 1.413-1.803 1.074-1.29 1.933-2.32 1.933-4.163 0-2.24-1.858-4.063-4.139-4.063zm0 2.734a1.33 1.33 0 11-.001 2.658 1.33 1.33 0 010-2.658"></path>
						</svg>
						Maps
					</a>
					<a className="flex items-center" href="">
						<svg className="h-5 mr-2" focusable="false" viewBox="0 0 24 24">
							<path d="M18 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0 18H6V4h2v8l2.5-1.5L13 12V4h5v16"></path>
						</svg>
						Books
					</a>
					<button className="flex items-center">
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
				<div className="flex items-start h-12 space-x-6 text-gray-700 text-xl">
					<a href="">Settings</a>
					<button>Tools</button>
				</div>
			</div>
		</div>
	);
}

export default HeaderOptions;
