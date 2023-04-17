import Analysis from "../components/Analysis";
import Header from "../components/Header";
import Hours from "../components/Hours";
import Progress from "../components/Progress";
import ProgressInfo from "../components/ProgressInfo";
import Trafic from "../components/Trafic";
import * as Icon from "react-bootstrap-icons";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchMetricsAsync, metricReducer } from "../store/metricSlice";
import { useEffect, useMemo, useState } from "react";
import { Count } from "../models/metrics";

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const { metrics, status } = useAppSelector(metricReducer);
  const [durations, setDuration] = useState<Count[]>([]);
  const round = (count: number) => {
    return Math.round(count);
  };

  // trafic data
  const data = useMemo(() => {
    return metrics?.data[0];
  }, [metrics]);

  const selectTime = (type: string) => {
    switch (type) {
      case "hour":
        setDuration(metrics?.errors_last_hour ? metrics.errors_last_hour : []);
        break;
      case "today":
        setDuration(metrics?.errors_today ? metrics.errors_today : []);
        break;
      case "3days":
        setDuration(
          metrics?.errors_last_3days ? metrics.errors_last_3days : []
        );
        break;
      default:
        setDuration(metrics?.errors_yesterday ? metrics.errors_yesterday : []);
        break;
    }
  };
  // fetch metrics data

  useEffect(() => {
    dispatch(fetchMetricsAsync());
    selectTime("yesterday");
    // eslint-disable-next-line
  }, []);

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

  if (status === "loading") return <h1>Loading...</h1>;
  return (
    <div className="main">
      <div className="dashboard">
        <Header title="Main Metrics" />
        <Hours timer={selectTime} />
        <div className="contents">
          <div className="contents__analysis">
            <Analysis
              title="Errors"
              errors={data?.errors_yesterday ? data.errors_yesterday : 0}
              avg={Math.floor(
                data?.errors_yesterday ? data.errors_yesterday : 0
              )}
            />
            <Analysis
              title="Zeroes"
              errors={data?.zeroes_yesterday ? data.zeroes_yesterday : 0}
              avg={Math.floor(
                data?.zeroes_yesterday ? data?.zeroes_yesterday : 0
              )}
            />
            <Analysis
              title="Timeouts"
              errors={data?.timeout_yesterday ? data.timeout_yesterday : 0}
              avg={Math.floor(
                data?.timeout_yesterday ? data?.timeout_yesterday : 0
              )}
            />
          </div>
          <div className="progress">
            <Progress className="progress__warning" percentage="35%" />
            <Progress className="progress__purple" percentage="30%" />
            <Progress className="progress__primary" percentage="20%" />
            <Progress className="progress__others" percentage="15%" />
          </div>
          <div className="contents__progress-info">
            <div className="contents__progress-info__data">
              {durations.map((duration, idx) => (
                <ProgressInfo
                  key={idx}
                  className={`${isIndex(idx)}`}
                  error={duration}
                />
              ))}
            </div>
          </div>
        </div>
        <Trafic
          trafic={{
            title: "Searches",
            yesterday: data?.searches_current_yesterday
              ? data.searches_current_yesterday
              : 0,
            lastYesterday: data?.searches_previous_yesterday
              ? data?.searches_previous_yesterday
              : 0,
            counts: data?.searches_current_last_hour
              ? round(data?.searches_current_last_hour)
              : 0,
            dtTrafic1: `Mobile trafic: ${round(
              data?.mobile_pessimizer ? data.mobile_pessimizer : 0
            )}%`,
            dtTrafic2: `Web trafic: ${round(
              data?.web_pessimizer ? data.web_pessimizer : 0
            )}%`,
            conversation: `You get ${round(
              data?.web_pessimizer ? data.web_pessimizer : 0
            )}% on mobile and desktop devices`,
            help: "Searches, Permisation",
          }}
        >
          <Icon.CircleFill
            className={`circleFill ${
              data?.searches_current_last_hour &&
              data.searches_current_last_hour < 0
                ? "red"
                : "green"
            }`}
          />
          <Icon.FunnelFill />
        </Trafic>

        <Trafic
          trafic={{
            title: "Clicks",
            yesterday: data?.clicks_current_yesterday
              ? data.clicks_current_yesterday
              : 0,
            lastYesterday: data?.clicks_previous_yesterday
              ? data?.clicks_previous_yesterday
              : 0,
            counts: data?.ctr_last_hour ? data.ctr_last_hour : 0,
            dtTrafic1: `CRT: ${round(
              data?.ctr_last_hour ? data.ctr_last_hour : 0
            )}%`,
            conversation: `Conversion from searches to click on all devices`,
            help: "CRT, Clicks",
          }}
        >
          <Icon.CircleFill
            className={`circleFill ${
              data?.ctr_last_hour && data.ctr_last_hour < 0 ? "red" : "green"
            }`}
          />
          <svg xmlns="/assets/img/touch-app.svg" fill="#fff"></svg>
        </Trafic>
        <Trafic
          trafic={{
            title: "Bookings",
            yesterday: data?.bookings_current_yesterday
              ? data.bookings_current_yesterday
              : 0,
            lastYesterday: data?.bookings_previous_yesterday
              ? data?.bookings_previous_yesterday
              : 0,
            counts: data?.bookings_current_last_hour
              ? round(data?.bookings_current_last_hour)
              : 0,
            dtTrafic1: `STR: ${round(
              data?.str_last_hour ? data.str_last_hour : 0
            )}%`,
            dtTrafic2: `STR: ${round(
              data?.str_last_3days ? data.str_last_3days : 0
            )}%`,
            conversation: "Conversion from click to bookings on all devices",
            help: "Str, Booking, Avg, Check",
          }}
        >
          <Icon.CircleFill
            className={`circleFill ${
              data?.bookings_current_last_hour &&
              data.bookings_current_last_hour > 0
                ? "green"
                : "red"
            }`}
          />
          <Icon.Cart />
        </Trafic>
      </div>
    </div>
  );
};

export default Dashboard;
