import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item, Metrics } from "../models/metrics";
import { RootState } from "./store";
import metricsService from "../services/data.service";

interface MetricState {
  metrics?: any;
  selectedData: Item | undefined;
  status: "idle" | "loading" | "failed";
}

const initialState: MetricState = {
  metrics: undefined,
  selectedData: undefined,
  status: "idle",
};

export const fetchMetricsAsync = createAsyncThunk(
  "Metrics",
  async (thunkApi) => {
    try {
      const response = await metricsService();
      return response;
    } catch (err: any) {
      if (!err.response) {
        throw err;
      }
      // We got validation errors, let's return those so we can reference in our component and set form errors
      return err.response.data;
    }
  }
);

export const MetricSlice = createSlice({
  name: "Metrics",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchMetricsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchMetricsAsync.fulfilled,

        (state, action: PayloadAction<Metrics>) => {
          if (action.payload) {
            state.metrics = action.payload;
          }
          state.status = "idle";
        }
      )
      .addCase(fetchMetricsAsync.rejected, (state) => {
        state.status = "failed";
      })

     
  },
});

export const metricReducer = (state: RootState) => state.metricsReduer;

export default MetricSlice.reducer;
