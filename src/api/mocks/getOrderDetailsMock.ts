import { http, HttpResponse } from "msw";
import {
  GetOrderDetailsParams,
  GetOrderDetailsResponse,
} from "../getOrderDetails";

export const getOrdersDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>("http://localhost:3333/orders/:orderId", async ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    createdAt: new Date().toISOString(),
    status: "pending",
    totalInCents: 10000,
    customer: {
      name: "John Doe",
      email: "johndoe@example.com",
      phone: "+1234567890",
    },
    orderItems: [
      {
        id: "item-1",
        priceInCents: 5000,
        quantity: 2,
        product: {
          name: "Pizza",
        },
      },
      {
        id: "item-2",
        priceInCents: 3000,
        quantity: 1,
        product: {
          name: "Salad",
        },
      },
    ],
  });
});
