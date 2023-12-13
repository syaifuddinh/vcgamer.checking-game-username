import "@/assets/css/components/status-badge/base.scss";

export default function StatusBadge({
	label = "active",
	variant = "success"
}) {
	return (
		<div className={`status-badge ${variant}`}>
			<div className="status-badge_circle"></div>
			<div className="status-badge_label">
				{ label }
			</div>
		</div>
	)
}
