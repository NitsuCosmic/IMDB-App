"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function SideBar() {
	return (
		<Sheet>
			<SheetTrigger asChild className="md:hidden">
				<button className="cursor-pointer">
					<Menu />
					<span className="sr-only">Toggle menu</span>
				</button>
			</SheetTrigger>
			<SheetContent
				side="left"
				className="p-3 text-neutral-100 bg-neutral-900 border-none"
			>
				<nav className="flex flex-col items-start gap-6 text-lg font-medium">
					<a href="#" className="flex items-center gap-2 text-lg font-semibold">
						IMDB
					</a>
					<a href="#" className="text-muted-foreground hover:text-foreground">
						Movies
					</a>
					<a href="#" className="text-muted-foreground hover:text-foreground">
						TV Shows
					</a>
				</nav>
			</SheetContent>
		</Sheet>
	);
}
