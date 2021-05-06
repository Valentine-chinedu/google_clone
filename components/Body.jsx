import { MdSearch } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

export const Body = () => {
	return (
		<div className="relative flex flex-col justify-center items-center bottom-18">
			<div className="flex absolute justify-center bottom-32">
				<svg
					className="h-40"
					xmlns="http://www.w3.org/2000/svg"
					height="800"
					width="1200"
					viewBox="-40.446 -22.19 350.532 133.14"
				>
					<path
						d="M115.39 46.71c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.86 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
						fill="#EA4335"
					/>
					<path
						d="M163.39 46.71c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
						fill="#FBBC05"
					/>
					<path
						d="M209.39 25.87v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"
						fill="#4285F4"
					/>
					<path d="M224.64 2.53v65h-9.5v-65z" fill="#34A853" />
					<path
						d="M261.66 54.01l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"
						fill="#EA4335"
					/>
					<path
						d="M34.93 40.94v-9.41h31.71c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C15.96 68.88 0 53.42 0 34.44 0 15.46 15.96 0 34.94 0c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65z"
						fill="#4285F4"
					/>
				</svg>
			</div>
			<div className="flex justify-center items-center w-full">
				<form className="relative flex justify-between items-center border border-gray-200 rounded-full px-5 py-2 h-16 w-5/12 hover:shadow-md">
					<div>
						<MdSearch className="text-2xl text-gray-400 mr-2" />
					</div>
					<div>
						<input
							className=" w-100 text-xl text-gray-700 focus:outline-none mr-2"
							type="text"
						/>
					</div>
					<div
						className="flex items-center border-r -mr-1
						 pr-4 h-9"
					>
						<IoMdClose className="text-3xl text-gray-400" />
					</div>
					<div>
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
					</div>
				</form>
			</div>
			<div className="space-x-4 text-lg mb-4 relative top-11">
				<a className="bg-gray-50 text-gray-600 py-3 px-5 rounded" href="">
					Google Search
				</a>
				<a className="bg-gray-50 text-gray-600 py-3 px-5 rounded" href="">
					I'm Feeling Lucky
				</a>
			</div>
			<div className="relative top-18 space-x-3">
				<span className="text-md">Google offered in:</span>
				<span className="text-blue-800">Hausa</span>
				<span className="text-blue-800">Igbo</span>
				<span className="text-blue-800">Ede Yoruba</span>
				<span className="text-blue-800">Nigerian</span>
				<span className="text-blue-800">Pidgin</span>
			</div>
		</div>
	);
};
