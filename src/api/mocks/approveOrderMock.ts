import { HttpResponse, http } from "msw";
import { ApproveOrderParams } from "../approveOrder";

export const approveOrderMock = http.patch<ApproveOrderParams, never, never>(
  "http://localhost:3333/orders/:orderId/approve",
  async ({ params }) => {
    if (params.orderId === "error-order-id") {
      return new HttpResponse(null, { status: 400 });
    }

    return new HttpResponse(null, { status: 204 });
  },
);
