function settings() {
	return (
		<div className=" absolute right-6 bottom-14 z-50 flex flex-col items-start space-y-8 text-gray-500 text-lg bg-gray-50 p-4 border-2 border-gray-600 w-52">
			<a
				className="hover:border-b border-gray-400"
				href="https://www.google.com/preferences?hl=en-NG&fg=1"
			>
				Search settings
			</a>
			<a
				className="hover:border-b border-gray-400"
				href="https://www.google.com/advanced_search?hl=en-NG&fg=1"
			>
				Advanced search
			</a>
			<a
				className="hover:border-b border-gray-400"
				href="https://myactivity.google.com/privacyadvisor/search?utm_source=googlemenu&fg=1"
			>
				Your data in search
			</a>
			<a
				className="hover:border-b border-gray-400"
				href="https://myactivity.google.com/product/search?utm_source=google&hl=en-NG&fg=1"
			>
				Search history
			</a>
			<a
				className="hover:border-b border-gray-400"
				href="https://support.google.com/websearch/?p=ws_results_help&hl=en-NG&fg=1"
			>
				Search help
			</a>
			<a className="hover:border-b border-gray-400">Send feedback</a>
		</div>
	);
}

export default settings;
