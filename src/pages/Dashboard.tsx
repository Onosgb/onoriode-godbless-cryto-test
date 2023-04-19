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

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const { metrics, status } = useAppSelector(metricReducer);
  const [selectedFilter, setSelectedFilter] = useState<string>("hour");
  const round = (count: number) => {
    return Math.round(count);
  };

  // Filter data based on selected filter
  const filteredData = useMemo(() => {
    const data = metrics?.data.map((item: any) => {
      const filteredItem: any = Object.create({});
      Object.keys(item).forEach((key: any) => {
        if (
          key.includes(selectedFilter === "today" ? "hour" : selectedFilter) ||
          key.includes("pessimizer")
        ) {
          const keyWithoutIndex = key.slice(0, key.lastIndexOf("_"));
          filteredItem[keyWithoutIndex] = item[key];
        }
      });
      return filteredItem ? filteredItem : undefined;
    });
    return data ? data[0] : [];
  }, [selectedFilter, metrics]);

  const counts = useMemo(() => {
    let filteredItem: any = [];
    if (metrics) {
      for (let key of Object.keys(metrics)) {
        if (
          key.includes(selectedFilter === "today" ? "hour" : selectedFilter)
        ) {
          filteredItem = metrics[key];
          break;
        }
      }
    }
    return filteredItem;
  }, [selectedFilter, metrics]);

  const filterData = (type: string) => {
    setSelectedFilter(type);
  };
  // fetch metrics data

  useEffect(() => {
    dispatch(fetchMetricsAsync());
    setSelectedFilter("hour");
    // eslint-disable-next-line
  }, []);

  const addtion = (...numbers: number[]) => {
    let result = 0;
    for (let r of numbers) {
      if (r) {
        result += r;
      }
    }
    return result;
  };

  if (status === "loading") return <h1>Loading...</h1>;
  return (
    <div className="main">
      <div className="dashboard">
        <Header title="Main Metrics" />
        <Hours filterData={filterData} />
        <div className="contents">
          <div className="contents__analysis">
            <Analysis
              title="Errors"
              errors={addtion(
                filteredData.errors_current,
                filteredData.errors,
                filteredData.errors_previous_last,
                filteredData.errors_current_last,
                filteredData.errors_last
              )}
              avg={Math.floor(
                addtion(
                  filteredData.zeroes_current,
                  filteredData.zeroes,
                  filteredData.zeroes_previous_last,
                  filteredData.zeroes_current_last,
                  filteredData.zeroes_last
                )
              )}
            />
            <Analysis
              title="Zeroes"
              errors={addtion(
                filteredData.zeroes_current,
                filteredData.zeroes,
                filteredData.zeroes_previous_last,
                filteredData.zeroes_current_last,
                filteredData.zeroes_last
              )}
              avg={Math.floor(
                addtion(
                  filteredData.zeroes_current,
                  filteredData.zeroes,
                  filteredData.zeroes_previous_last,
                  filteredData.zeroes_current_last,
                  filteredData.zeroes_last
                )
              )}
            />
            <Analysis
              title="Timeouts"
              errors={addtion(
                filteredData.timeout_current,
                filteredData.timeout,
                filteredData.timeout_previous_last,
                filteredData.timeout_current_last,
                filteredData.timeout_last
              )}
              avg={addtion(
                filteredData.timeout_current,
                filteredData.timeout,
                filteredData.timeout_previous_last,
                filteredData.timeout_current_last,
                filteredData.timeout_last
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
              <ProgressInfo durations={counts} />
            </div>
          </div>
        </div>
        <Trafic
          trafic={{
            title: "Searches",
            type: selectedFilter,
            yesterday: addtion(
              filteredData.searches_current,
              filteredData.searches,
              filteredData.searches_previous_last,
              filteredData.searches_current_last,
              filteredData.searches_last
            ),

            lastYesterday: addtion(
              filteredData.searches_current,
              filteredData.searches,
              filteredData.searches_previous_last,
              filteredData.searches_current_last,
              filteredData.searches_last
            ),
            counts: addtion(
              filteredData.searches_current,
              filteredData.searches,
              filteredData.searches_previous_last,
              filteredData.searches_current_last,
              filteredData.searches_last
            ),
            dtTrafic1: `Mobile trafic: ${
              filteredData && filteredData.mobile ? filteredData.mobile : 0
            }%`,
            dtTrafic2: `Web trafic: ${
              filteredData && filteredData.web ? filteredData.web : 0
            }%`,
            conversation: `You get ${
              filteredData && filteredData.web ? filteredData.web : 0
            }% on mobile and desktop devices`,
            help: "Searches, Permisation",
          }}
        >
          <Icon.CircleFill
            className={`circleFill ${
              addtion(
                filteredData.searches_current,
                filteredData.searches,
                filteredData.searches_previous_last,
                filteredData.searches_current_last,
                filteredData.searches_last
              ) < 0
                ? "red"
                : "green"
            }`}
          />
          <Icon.FunnelFill />
        </Trafic>

        <Trafic
          trafic={{
            title: "Clicks",
            type: selectedFilter,

            yesterday: addtion(
              filteredData.clicks_current,
              filteredData.clicks,
              filteredData.clicks_previous_last,
              filteredData.clicks_current_last,
              filteredData.clicks_last
            ),
            lastYesterday: addtion(
              filteredData.clicks_current,
              filteredData.clicks,
              filteredData.clicks_previous_last,
              filteredData.clicks_current_last,
              filteredData.clicks_last
            ),
            counts: addtion(
              filteredData.clicks_current,
              filteredData.clicks,
              filteredData.clicks_previous_last,
              filteredData.clicks_current_last,
              filteredData.clicks_last
            ),
            dtTrafic1: `CRT: ${round(
              addtion(
                filteredData.ctr_current,
                filteredData.ctr,
                filteredData.ctr_previous_last,
                filteredData.ctr_current_last,
                filteredData.ctr_last
              )
            )}%`,
            conversation: `Conversion from searches to click on all devices`,
            help: "CRT, Clicks",
          }}
        >
          <Icon.CircleFill
            className={`circleFill ${
              addtion(
                filteredData.ctr_current,
                filteredData.ctr_previous,
                filteredData.ctr_last
              ) < 0
                ? "red"
                : "green"
            }`}
          />
          <img src="/assets/img/touch-app.svg" alt="" />
        </Trafic>
        <Trafic
          trafic={{
            title: "Bookings",
            type: selectedFilter,
            yesterday: addtion(
              filteredData.bookings_current,
              filteredData.bookings,
              filteredData.bookings_previous_last,
              filteredData.bookings_current_last,
              filteredData.bookings_last
            ),
            lastYesterday: addtion(
              filteredData.bookings_current,
              filteredData.bookings,
              filteredData.bookings_previous_last,
              filteredData.bookings_current_last,
              filteredData.bookings_last
            ),
            counts: addtion(
              filteredData.bookings_current,
              filteredData.bookings,
              filteredData.bookings_previous_last,
              filteredData.bookings_current_last,
              filteredData.bookings_last
            ),
            dtTrafic1: `STR: ${round(
              addtion(
                filteredData.ctr_current,
                filteredData.ctr,
                filteredData.ctr_previous_last,
                filteredData.ctr_current_last,
                filteredData.ctr_last
              )
            )}%`,
            dtTrafic2: `CTR: ${round(
              addtion(
                filteredData.ctr_current,
                filteredData.ctr,
                filteredData.ctr_previous_last,
                filteredData.ctr_current_last,
                filteredData.ctr_last
              )
            )}%`,
            conversation: "Conversion from click to bookings on all devices",
            help: "Str, Booking, Avg, Check",
          }}
        >
          <Icon.CircleFill
            className={`circleFill ${
              addtion(
                filteredData.bookings_current,
                filteredData.bookings,
                filteredData.bookings_previous_last,
                filteredData.bookings_current_last,
                filteredData.bookings_last
              ) > 0
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
