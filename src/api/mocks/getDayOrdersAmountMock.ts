import { http, HttpResponse } from "msw";
import { GetDayOrdersAmountResponse } from "../getDayOrdersAmount";

export const getDayOrdersAmountMock = http.get<
  never,
  never,
  GetDayOrdersAmountResponse
>("http://localhost:3333/metrics/day-orders-amount", async () => {
  return HttpResponse.json({
    amount: 20,
    diffFromYesterday: -5,
  });
});
