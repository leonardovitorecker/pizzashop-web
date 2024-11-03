import { HttpResponse, http } from "msw";
import { DeliverOrderParams } from "../deliverOrder";

export const deliverOrderMock = http.patch<DeliverOrderParams, never, never>(
  "http://localhost:3333/orders/:orderId/deliver",
  async ({ params }) => {
    if (params.orderId === "error-order-id") {
      return new HttpResponse(null, { status: 400 });
    }

    return new HttpResponse(null, { status: 204 });
  },
);
