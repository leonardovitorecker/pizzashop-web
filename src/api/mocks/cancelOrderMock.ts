import { HttpResponse, http } from "msw";
import { CancelOrderParams } from "../cancelOrder";

export const cancelOrderMock = http.patch<CancelOrderParams, never, never>(
  "http://localhost:3333/orders/:orderId/cancel",
  async ({ params }) => {
    if (params.orderId === "error-order-id") {
      return new HttpResponse(null, { status: 400 });
    }

    return new HttpResponse(null, { status: 204 });
  },
);
