import { http, HttpResponse } from "msw";
import { GetMonthCanceledOrdersAmountResponse } from "../getMonthCanceledOrdersAmont";

export const getMonthCanceledOrdersAmontMock = http.get<
  never,
  never,
  GetMonthCanceledOrdersAmountResponse
>("http://localhost:3333/metrics/month-canceled-orders-amount", async () => {
  return HttpResponse.json({
    amount: 5,
    diffFromLastMonth: -5,
  });
});
