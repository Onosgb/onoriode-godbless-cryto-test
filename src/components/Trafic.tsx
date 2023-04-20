import * as Icon from "react-bootstrap-icons";
import { bgColor, color, round } from "../utils/utils";
export interface TraficData {
  current: number;
  previous: number;
  last: number;
  current_last: number;
  type: string;
  title: string;
  counts: number;
  dtTrafic1: string;
  dtTrafic2?: string;
  conversation: string;
  help: string;
}
export const Trafic: React.FC<{
  trafic: TraficData;
  children: React.ReactNode;
}> = ({ trafic, children }) => {
  return (
    <div className="trafic">
      <div className="trafic__left">
        <div className="large-circle bg-primary trafic__left__circle">
          {children}
        </div>
        <div className="trafic__left__arrow">
          <div className="square "></div>
          <div className="triangle "></div>
          <Icon.CaretDown className="triangle" />
        </div>
      </div>

      <div className="trafic__right">
        <div className="trafic__right__details">
          <div className="trafic__right__details__info">
            <h3 className={`${color(trafic.counts)}`}>{trafic.title}</h3>

            <div className={`info-container__card ${bgColor(trafic.counts)}`}>
              {trafic.counts > 0 ? "+" : ""}
              {round(trafic.counts)}%
            </div>
          </div>

          {trafic.current && (
            <div className="trafic__right__details__info">
              <h3>{trafic.current}</h3>
              <p> {trafic.type}</p>
            </div>
          )}
          {trafic.previous && (
            <div className="trafic__right__details__info">
              <h3>{trafic.previous}</h3>
              <p> Previous {trafic.type}</p>
            </div>
          )}
          {trafic.last && (
            <div className="trafic__right__details__info">
              <h3>{trafic.last}</h3>
              <p> Last {trafic.type}</p>
            </div>
          )}

          {trafic.last && (
            <div className="trafic__right__details__info">
              <h3>{trafic.current_last}</h3>
              <p> Current Last {trafic.type}</p>
            </div>
          )}
        </div>
        <div className="trafic__right__details">
          <div className="trafic__right__details__data">
            <h3>{trafic.dtTrafic1}</h3>
            <h3>{trafic?.dtTrafic2}</h3>
          </div>
          <div className="trafic__right__details__conversation">
            <p className="">{trafic.conversation}</p>
          </div>
          <div className="trafic__right__details__help">
            <span>Help: </span>
            <span className="text-primary">{trafic.help}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trafic;
