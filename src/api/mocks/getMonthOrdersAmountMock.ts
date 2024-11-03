import { http, HttpResponse } from "msw";
import { GetMonthOrdersAmountResponse } from "../getMonthOrdersAmount";

export const getMonthOrdersAmountMock = http.get<
  never,
  never,
  GetMonthOrdersAmountResponse
>("http://localhost:3333/metrics/month-orders-amount", async () => {
  return HttpResponse.json({
    amount: 200,
    diffFromLastMonth: 7,
  });
});
