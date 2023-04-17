import { useState } from "react";

const Hours: React.FC<{ timer: Function }> = ({ timer }) => {
  const [selected, setSelected] = useState("yesterday");
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
      title: "Last Yesterday",
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
            timer(duration.type);
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
