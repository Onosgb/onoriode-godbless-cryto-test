const ProgressInfo: React.FC<{percent: string, className: string}> = ({className, percent}) => {
  return (
    <div className="contents__progress-info__data">
    <div className={`small-sqr ${className}`}></div>
    <p className="sub-title">Average: {percent}</p>
    </div>
  )
}

export default ProgressInfo