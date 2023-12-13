import Link from "next/link";
import Icon from "@/components/icon";
import ArticleShorcut from "@/assets/icons/primary/article-shorcut.svg";

export default function ViewDetailButton({
	href
}) {

	return (
		<Link href={href} className="button-with-icon">
			<Icon
				src={ArticleShorcut}
				alt="detail button"
			/>
		</Link>	
	)
}