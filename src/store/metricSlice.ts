import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Metrics } from "../models/metrics";
import { RootState } from "./store";
import metricsService from "../services/data.service";

interface MetricState {
  metrics: Metrics[];
  metric?: Metrics;
  status: "idle" | "loading" | "failed";
}

const initialState: MetricState = {
  metrics: [],
  metric: undefined,
  status: "idle",
};

export const fetchMetricsAsync = createAsyncThunk("Metrics", async (thunkApi) => {
  try {
    const response = await metricsService();
    console.log('metrids', response)
    return response;
  } catch (err: any) {
    if (!err.response) {
      throw err;
    }
    // We got validation errors, let's return those so we can reference in our component and set form errors
    return err.response.data;
  }
});

export const getMetricByIdAsync = createAsyncThunk(
  "Metric/get",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await metricsService()

      return response;
    } catch (err: any) {
      if (!err.response) {
        throw err;
      }

      return rejectWithValue(err.response);
    }
  }
);

export const MetricSlice = createSlice({
  name: "Metrics",
  initialState,

  reducers: {
    selectMetric: (state, action: PayloadAction<Metrics | undefined>) => {
      state.metric = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchMetricsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchMetricsAsync.fulfilled,

        (state, action: PayloadAction<Metrics[]>) => {
          if (action.payload) {
            state.metrics = action.payload;
          }
          state.status = "idle";
        }
      )
      .addCase(fetchMetricsAsync.rejected, (state) => {
        state.status = "failed";
      })

      .addCase(getMetricByIdAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        getMetricByIdAsync.fulfilled,

        (state, action: PayloadAction<Metrics>) => {
          state.metric = action.payload;
          state.metrics.push(action.payload);
          state.status = "idle";
        }
      )
      .addCase(getMetricByIdAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { selectMetric } = MetricSlice.actions;
export const metricReducer = (state: RootState) => state.metricsReduer;

export default MetricSlice.reducer;
