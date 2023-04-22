import { useState } from "react";

const Hours: React.FC<{ filterData: Function }> = ({ filterData }) => {
  const [selected, setSelected] = useState("hour");
  const [durations] = useState([
    {
      type: "hour",
      title: "Last Hour",
    },
    {
      type: "today",
      title: "Today",
    },
    {
      type: "yesterday",
      title: "Yesterday",
    },
    {
      type: "3days",
      title: "Last 3 Days",
    },
  ]);
  return (
    <div className="hours">
      {durations.map((duration, idx) => (
        <span
          key={idx}
          className={`hours__title ${
            selected === duration.type ? "hours__active" : ""
          }`}
          onClick={() => {
            filterData(duration.type);
            setSelected(duration.type);
          }}
        >
          {duration.title}
        </span>
      ))}
    </div>
  );
};

export default Hours;
