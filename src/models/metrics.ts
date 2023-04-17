export interface Metrics {
    errors_last_3days: Count[]
      errors_yesterday: Count[];
      errors_last_hour: Count[],
      data: Item[]
    
}

export interface Count {
    count: number | null;
    code: number | null;
}

export interface Item {
    bookings_current_last_3days: number | null;
    timeout_yesterday: number | null;
    zeroes_yesterday: number | null;
    avg_price_yesterday: number | null;
    clicks_current_last_hour: number | null;
    avg_price_last_hour: number | null;
    zeroes_last_hour: number | null;
    mobile_pessimizer: number | null;
    bookings_current_last_hour: number | null;
    searches_current_last_3days: number | null;
    bookings_previous_last_hour: number | null;
    str_yesterday: number | null;
    errors_yesterday: number | null;
    ctr_last_hour: number | null;
    gate_id: number | null;
    ctr_yesterday: number | null;
    searches_current_yesterday: number | null;
    bookings_previous_last_3days: number | null;
    zeroes_last_3days: number | null;
    clicks_previous_last_hour: number | null;
    timeout_last_3days: number | null;
    errors_last_3days: number | null;
    bookings_previous_yesterday: number | null;
    searches_previous_yesterday: number | null;
    searches_previous_last_hour: number | null;
    str_last_hour: number | null;
    clicks_previous_yesterday: number | null;
    avg_price_last_3days: number | null;
    searches_current_last_hour: number | null;
    web_pessimizer: number | null;
    ctr_last_3days: number | null;
    clicks_previous_last_3days: number | null;
    str_last_3days: number | null;
    timeout_last_hour: number | null;
    clicks_current_last_3days: number | null;
    bookings_current_yesterday: number | null;
    searches_previous_last_3days: number | null;
    errors_last_hour: number | null;
    clicks_current_yesterday: number | null;
}