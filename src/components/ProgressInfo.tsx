import { Count } from "../models/metrics"

const ProgressInfo: React.FC<{className: string, error: Count}> = ({className, error}) => {
  return (
    <div className="contents__progress-info__data">
    <div className={`small-sqr ${className}`}></div>
    <p className="sub-title">{error.code}: {error.count}</p>
    </div>
  )
}

export default ProgressInfo