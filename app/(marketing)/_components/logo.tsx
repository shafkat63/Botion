import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
const font = Poppins({
	subsets: ["latin"],
	weight: ["400", "600"],
});
const Logo = () => {
	return (
		<div className="hidden md:flex items-center gap-x-2 ">
			<Image
				src="/Botion.png"
				alt="Botion logo"
				height="40"
				width="40"
				className="dark:hidden"
			/>
			<Image
				src="/Botion-dark.png"
				alt="Botion logo"
				height="40"
				width="40"
				className="hidden dark:block"
			/>
			<p className={cn("font-semibold", font.className)}>Botion</p>
		</div>
	);
};

export default Logo;
