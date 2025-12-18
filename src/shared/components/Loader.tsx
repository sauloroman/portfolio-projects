export const Loader: React.FC = () => {
  return (
    <div className="roman-loader">
      <div className="roman-loader__brand">
        <span className="roman-loader__name">Roman</span>
        <span className="roman-loader__dot">.</span>
        <span className="roman-loader__dev">dev</span>
      </div>

      <div className="roman-loader__bar">
        <span />
      </div>

      <p className="roman-loader__text">Loading projects</p>
    </div>
  )
}
