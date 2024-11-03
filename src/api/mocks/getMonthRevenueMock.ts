import { http, HttpResponse } from "msw";
import { GetMonthRevenueResponse } from "../getMonthRevenue";

export const getMonthRevenueMock = http.get<
  never,
  never,
  GetMonthRevenueResponse
>("http://localhost:3333/metrics/month-receipt", async () => {
  return HttpResponse.json({
    receipt: 20000,
    diffFromLastMonth: 10,
  });
});
