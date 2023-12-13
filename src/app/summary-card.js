export default function SummaryCard({
  amount,
  description,
  variant = ""
}) {
    return (
        <div className="dashboard_summary-card">
            <div className={`dashboard_summary-card__amount ${variant}`}>
                { amount }
            </div>
            <div className="dashboard_summary-card__description">
                { description }
            </div>
        </div>
    )
}