import "@/assets/css/pages/checking-game-username/data-card.scss";

export default function DataCard({ title, imageSrc, onClick }) {
	return (
		<div
			className="data-card"
			onClick={onClick}
		>
			<div className="data-card_thumbnail">
				<img
					src={imageSrc}
					alt={`${title} thumbnail`}
					loading="lazy"
				/>
			</div>
			<div className="data-card_title">
				{ title }
			</div>
		</div>
	)
}
