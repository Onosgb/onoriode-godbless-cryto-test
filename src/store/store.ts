import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import metricReducer  from './metricSlice';

export const store = configureStore({
  reducer: {
    metricsReduer: metricReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
