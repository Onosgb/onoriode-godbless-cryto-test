import { round } from "../utils/utils";

const Analysis: React.FC<{ errors: number; avg: number; title: string }> = ({
  errors,
  avg,
  title,
}) => {
  return (
    <div className="contents__analysis__pointer">
      <div className="contents__analysis__pointer__container">
        <div className="contents__analysis__pointer__container__circle"></div>
      </div>
      <div className="contents__analysis__pointer__percentage">
        <h1 className="contents__analysis__pointer__percentage__title">
          {title}: {round(errors)}%
        </h1>
        <p className="contents__analysis____pointer__subtitle">
          Average: {round(avg)}%
        </p>
      </div>
    </div>
  );
};

export default Analysis;
