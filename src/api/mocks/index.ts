import { env } from "@/env";
import { setupWorker } from "msw/browser";
import { signInMock } from "./signInMock";
import { registerRestaurantMock } from "./registerRestaurantMock";
import { getMonthCanceledOrdersAmontMock } from "./getMonthCanceledOrdersAmountMock";
import { getMonthRevenueMock } from "./getMonthRevenueMock";
import { getPopularProductsMock } from "./getPopularProductMock";
import { getDayOrdersAmountMock } from "./getDayOrdersAmountMock";
import { getMonthOrdersAmountMock } from "./getMonthOrdersAmountMock";
import { getDailyRevenueInPeriodMock } from "./getDailyRevenueInPeriodMock";
import { getManagedRestaurantMock } from "./getManagedRestaurantMock";
import { updateProfileMock } from "./updateProfileMock";
import { getProfileMock } from "./getProfileMock";
import { getOrdersMock } from "./getOrdersMock";
import { getOrdersDetailsMock } from "./getOrderDetailsMock";
import { approveOrderMock } from "./approveOrderMock";
import { dispatchOrderMock } from "./dispatchOrderMock";
import { cancelOrderMock } from "./cancelOrderMock";
import { deliverOrderMock } from "./deliverOrderMock";

export const worker = setupWorker(
  signInMock,
  registerRestaurantMock,
  getDayOrdersAmountMock,
  getMonthOrdersAmountMock,
  getPopularProductsMock,
  getMonthCanceledOrdersAmontMock,
  getMonthRevenueMock,
  getDailyRevenueInPeriodMock,
  getPopularProductsMock,
  getProfileMock,
  getManagedRestaurantMock,
  updateProfileMock,
  getOrdersMock,
  getOrdersDetailsMock,
  approveOrderMock,
  dispatchOrderMock,
  cancelOrderMock,
  deliverOrderMock,
);

export async function enableMSW() {
  if (env.MODE !== "test") {
    return;
  }
  await worker.start();
}
