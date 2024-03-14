"use client";
import { useConvexAuth } from "convex/react";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/mode-toggle";

import Logo from "./logo";
import { SignInButton,UserButton } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import Spinner from "@/components/spinner";
import Link from "next/link";

const Navbar = () => {
	const { isAuthenticated, isLoading } = useConvexAuth();
	const scrolled = useScrollTop();
	return (
		<div
			className={cn(
				"z-50 bg-background fixed top-0 dark:bg-[#1F1F1F] flex items-center w-full p-6",
				scrolled && "border-b shadow-sm"
			)}
		>
			<Logo />
			<div
				className="md:ml-auto md:justify-end justify-between w-full 
			flex items-center gap-x-2"
			>
				{isLoading && <Spinner />}
				{!isAuthenticated && !isLoading && (
					<>
						<SignInButton mode="modal">
							<Button variant="ghost" size="sm">
								Log in
							</Button>
						</SignInButton>
						<SignInButton mode="modal">
							<Button size="sm">Get Botion Free </Button>
						</SignInButton>
					</>
				)}
				{isAuthenticated && !isLoading && (
					<>
						<Button variant="ghost" size="sm">
							<Link href="/documents">Enter Botion</Link>
						</Button>
						<UserButton afterSignOutUrl="/">

						</UserButton>
					</>
				)}
				<ModeToggle />
			</div>
		</div>
	);
};

export default Navbar;
