
// interface Time{
//     Hours: string;
//     click: () => void;
// }

const Hours: React.FC = () => {
  return (
    <div className="hours">
        <span className="hours__title">Last Hours</span>
        <span className="hours__title">Today</span>
        <span className="hours__title hours__active">Yesterday</span>
        <span className="hours__title">Last 3 Days</span>

    </div>
  )
}

export default Hours