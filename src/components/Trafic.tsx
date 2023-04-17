import * as Icon from "react-bootstrap-icons";
import { bgColor, color, round } from "../utils/utils";
export interface TraficData {
  title: string;
  yesterday: number;
  lastYesterday: number;
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
        <div className="trafic__left__container">
          <div className="large-circle bg-primary trafic__left__container__circle">
            {children}
          </div>
          <div className="trafic__left__container__arrow">
            <div className="square "></div>
            <div className="triangle "></div>
            <Icon.CaretDown className="triangle" />
          </div>
        </div>

        <div className="trafic__left__details">
          <div className="trafic__left__details__info">
            <h3 className={`${color(trafic.counts)}`}>{trafic.title}</h3>
            {trafic.counts > 0 || trafic.counts < 0 ? (
              <div className={`info-container__card ${bgColor(trafic.counts)}`}>
                {trafic.counts > 0 ? "+" : ""}
                {round(trafic.counts)}%
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="trafic__left__details__info">
            <h3>{trafic.yesterday}</h3>
            <p className="trafic__left__details__info">Yesterday</p>
          </div>
          <div className="trafic__left__details__info">
            <h3>{trafic.lastYesterday}</h3>
            <p className="trafic__left__details__info"> Last Yesterday</p>
          </div>
        </div>
      </div>
      <div className="trafic__right">
        <div className="trafic__right__details__info">
          <h3>{trafic.dtTrafic1}</h3>
          <h3>{trafic?.dtTrafic2}</h3>
        </div>
        <div className="trafic__right__details__info">
          <p className="trafic__right__details__info">{trafic.conversation}</p>
        </div>
        <div className="trafic__right__details__info">
          <span>Help: </span>
          <span className="text-primary">{trafic.help}</span>
        </div>
      </div>
    </div>
  );
};

export default Trafic;
