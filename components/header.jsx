import { BsGrid3X3Gap } from "react-icons/bs";

function header() {
	return (
		<div>
			<header className="flex justify-end items-center space-x-9 m-5 ">
				<div className="flex items-center lg:space-x-4 lg:text-base lg:font-normal lg:text-gray-700">
					<a href="">Gmail</a>
					<a href="">Images</a>
				</div>
				<div className="flex items-center space-x-7">
					<button>
						<BsGrid3X3Gap className="text-2xl text-gray-500" />
					</button>

					{/* Avatar */}
					<img
						loading="lazy"
						className="h-9 w-9 rounded-full object-cover"
						src="/person-1.jpeg"
						alt="avatar"
					/>
				</div>
			</header>
		</div>
	);
}

export default header;
