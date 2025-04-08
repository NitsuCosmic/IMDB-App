import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
import { useState } from "react";
import { SideBar } from "../SideBar";

export function NavBar() {
	const [showSearch, setShowSearch] = useState(false);

	return (
		<header className="sticky top-0 z-50 w-full bg-neutral-900 text-neutral-100">
			<div className="flex items-center justify-between gap-2 relative p-3 max-w-screen-2xl mx-auto">
				{/* Mobile menu button and title */}
				<div className="flex items-center gap-4 md:gap-6 z-10">
					<SideBar />

					<a href="#" className="text-lg font-semibold md:text-xl">
						IMDB
					</a>
				</div>

				{/* Desktop navigation */}
				<nav className="absolute inset-0 hidden items-center gap-6 text-sm text-neutral-100 font-medium md:flex justify-center">
					<a href="#" className="transition-colors">
						Movies
					</a>
					<a href="#" className="transition-colors">
						TV Shows
					</a>
				</nav>

				{/* Search and actions */}
				<div className="flex items-center gap-2 z-10">
					{showSearch ? (
						<div className="flex items-center gap-2">
							<Input
								type="search"
								placeholder="Search movies, TV shows..."
								className="lg:w-[300px]"
								autoFocus
							/>
							<button
								className="cursor-pointer"
								onClick={() => setShowSearch(false)}
							>
								<span className="sr-only">Close search</span>
								<X />
							</button>
						</div>
					) : (
						<button
							className="cursor-pointer"
							onClick={() => setShowSearch(true)}
						>
							<Search />
							<span className="sr-only">Search</span>
						</button>
					)}
				</div>
			</div>
		</header>
	);
}
