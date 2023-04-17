import Analysis from "../components/Analysis"
import Header from "../components/Header"
import Hours from "../components/Hours"
import Progress from "../components/Progress"
import ProgressInfo from "../components/ProgressInfo"
import Trafic from "../components/Trafic"
import * as Icon from 'react-bootstrap-icons';

function Dashboard() {
  return (
    <div className="main">
        <div className="dashboard">
       <Header title="Main Metrics"/>
       <Hours />
        <div className="contents">
            <div className="contents__analysis">
             <Analysis />
             <Analysis />       
             <Analysis />       


            </div>
            <div className="progress">
                <Progress  className="progress__warning"percentage="35%"/>
                <Progress  className="progress__purple" percentage="30%"/>
                <Progress  className="progress__primary" percentage="20%"/>
                <Progress  className="progress__others"percentage="15%"/>

            </div>
            <div className="contents__progress-info">   
                <div className="contents__progress-info__data">
                    <ProgressInfo className="bg-warning" percent='0,11%'/>
                    <ProgressInfo className="bg-secondary" percent='0,11%'/>
                    <ProgressInfo className=" bg-primary" percent='0,11%'/>
                    <ProgressInfo className="bg-warning" percent='0,11%'/>
                    <ProgressInfo className="bg-default" percent='0,11%'/>
                </div>
            </div>

        </div>
        <Trafic>
        <Icon.CircleFill className="circleFill green"/>
                <Icon.FunnelFill/>
        </Trafic>    
           
        <Trafic>
        <Icon.CircleFill className="circleFill green"/>
                <Icon.MenuButtonWide/>
        </Trafic>    
        <Trafic>
        <Icon.CircleFill className="circleFill green"/>
                <Icon.Cart/>
        </Trafic>    
        </div>
        
    </div>
  )
}

export default Dashboard