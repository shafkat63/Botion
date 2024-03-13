import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Botion",
	description: "All-in-one workspace for notes, tasks, wikis, and databases",
	icons: {
		icon: [
			{
				media: "(prefers-color-scheme:light)",
				url: "/Botion.png",
				href: "/Botion.png",
			},{
				media: "(prefers-color-scheme:dark)",
				url: "/Botion.png",
				href: "/Botion.png",
			}
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
