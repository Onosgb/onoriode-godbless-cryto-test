import { Count } from "../models/metrics";

const ProgressInfo: React.FC<{ durations: Count[] }> = ({ durations }) => {
  // check for the selected filter
  const isIndex = (type: number) => {
    switch (type) {
      case 0:
        return "bg-warning";
      case 1:
        return "bg-secondary";
      case 2:
        return "bg-primary";
      case 3:
        return "bg-others";
      default:
        return "";
    }
  };
  return (
    <>
      {durations ? (
        durations.map((duration: any, idx: number) => (
          <div className="contents__progress-info__data">
            <div className={`small-sqr ${isIndex(idx)}`}></div>
            {duration.code && duration.count ? (
              <p className="sub-title">
                {duration.code ? duration.code : 0}: {duration.count}
              </p>
            ) : (
              <p className="sub-title">0:0</p>
            )}
          </div>
        ))
      ) : (
        <div className="contents__progress-info__data">No data to show</div>
      )}
    </>
  );
};

export default ProgressInfo;
