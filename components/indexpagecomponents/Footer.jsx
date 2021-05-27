function Footer() {
	return (
		<div>
			<footer className="flex flex-col justify-center bg-gray-100 h-auto">
				<div className=" flex items-center border-b w-full text-lg text-gray-500 pl-10 h-14">
					<h3>Nigeria</h3>
				</div>

				<div className="flex items-center justify-between h-14 w-full px-10 text-gray-500 text-lg">
					<div className="space-x-10">
						<a
							className=" hover:border-b border-gray-500"
							href="https://about.google/?utm_source=google-NG&utm_medium=referral&utm_campaign=hp-footer&fg=1"
						>
							About
						</a>
						<a
							className=" hover:border-b border-gray-500"
							href="https://www.google.com/intl/en_ng/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1"
						>
							Advertising
						</a>
						<a
							className=" hover:border-b border-gray-500"
							href="https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1"
						>
							Business
						</a>
						<a
							className=" hover:border-b border-gray-500"
							href="https://google.com/search/howsearchworks/?fg=1"
						>
							How Search works
						</a>
					</div>
					<div className="flex space-x-2 relative right-24 text-gray-500">
						<img
							className="h-5"
							loading="lazy"
							src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAMAAAAiV0Z6AAAAPFBMVEVLoEN0wU6CzFKCzFKCzFKCzFKCzFJSo0MSczNDmkCCzFJPoUMTczNdr0gmgziCzFITczMTczMTczMTczPh00jOAAAAFHRSTlPF/+bIsms8Ad///hX+//5/tXw7aMEAx10AAACaSURBVHgBbc4HDoRQCATQ33tbvf9dF9QxaCT9UQaltLHOh/golXKhMs5Xqa0xU1lyoa2fXFyQOsDG38qsLy4TaV+sFislovyhPzLJJrBu6eQOtpW0LjbJkzTuTDLRVNKa3uxJI+VdiRqXSeu6GW+Qxi29eLIi8H7EsYrT42BD+mQtNO5JMjRuC4lSY8V4hsLX0egGijvUSEP9AbylEsOkeCgWAAAAAElFTkSuQmCC"
							alt="green leave"
						/>
						<a
							className=" hover:border-b border-gray-500"
							href="https://sustainability.google/commitments/?utm_source=googlehpfooter&utm_medium=housepromos&utm_campaign=bottom-footer&utm_content="
						>
							Carbon neutral since 2007
						</a>
					</div>
					<div className="space-x-10 text-gray-500">
						<a
							className=" hover:border-b border-gray-500"
							href="https://policies.google.com/privacy?hl=en-NG&fg=1"
						>
							Privacy
						</a>
						<a
							className=" hover:border-b border-gray-500"
							href="https://policies.google.com/terms?hl=en-NG&fg=1"
						>
							Terms
						</a>
						<button>Settings</button>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default Footer;
