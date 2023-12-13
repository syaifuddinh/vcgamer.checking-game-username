import Image from "next/image";

export default function Icon({ src, alt }) {
	return (
		<Image
			src={src}
			alt={alt}
		/>
	);
}