import "@/assets/css/components/button/google.scss";
import Image from "next/image"
import GoogleIcon from "@/assets/images/google-button/google.svg"

export default function GoogleLoginButton({
	onClick
}) {

	return (
		<button
			type="google-button"
			className={`google-button`}
		>
			<div className="google-button_icon">
				<Image
					src={GoogleIcon}
					alt="google icon"
				/>
			</div>
			<div className="google-button_label">
				Login with google
			</div>
		</button>	
	)
}