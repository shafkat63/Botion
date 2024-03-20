import { Toaster } from "sonner";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import ConvexClientProdiver from "@/components/providers/convex-provider";

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
			},
			{
				media: "(prefers-color-scheme:dark)",
				url: "/Botion.png",
				href: "/Botion.png",
			},
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={inter.className}>
				<ConvexClientProdiver>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
						storageKey="botion-theme"
					>
						<Toaster position="bottom-center" />
						{children}
					</ThemeProvider>
				</ConvexClientProdiver>
			</body>
		</html>
	);
}
