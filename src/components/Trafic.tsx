
import * as Icon from 'react-bootstrap-icons';

export const Trafic: React.FC<{children: React.ReactNode}> = ({children}) => {
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
                <Icon.CaretDown className="triangle"/>
            </div>
        </div>

        <div className="trafic__left__details">
                <div className="trafic__left__details__info">
                <h3>Searches</h3>
                <div className="info-container__card bg-success">+5%</div>
                </div>
                <div className="trafic__left__details__info">
                <h3>28 380</h3>
                <p className="trafic__left__details__info">Yesterday</p>
                </div>
                <div className="trafic__left__details__info">
                <h3>28 380</h3>
                <p className="trafic__left__details__info">Yesterday</p>
                </div>
        </div>
    </div>
    <div className="trafic__right">
    <div className="trafic__right__details__info">
                <h3>Mobile Trafic: 100%</h3>
                <h3>Web Trafic: 100%</h3>
    </div>
    <div className="trafic__right__details__info">
        <p className="trafic__right__details__info">You have get 100% of click on mobile and desktop devices</p>
    </div>
    <div className="trafic__right__details__info">
    <span>Help: </span><span className="text-primary">asdfasdfs</span>
    </div>
    </div>
</div>
  )
}

export default Trafic