import { http, HttpResponse } from "msw";
import { GetOrdersReponse } from "../getOrders";

type Orders = GetOrdersReponse["orders"];
type OrderStatus = GetOrdersReponse["orders"][number]["status"];

const statuses: OrderStatus[] = [
  "pending",
  "canceled",
  "processing",
  "delivering",
  "delivered",
];

const orders: Orders = Array.from({ length: 60 }).map((_, i) => {
  return {
    orderId: `order-${i + 1}`,
    customerName: `Customer ${i + 1}`,
    createdAt: new Date().toISOString(),
    total: Math.random() * 100,
    status: statuses[i % 5],
  };
});

export const getOrdersMock = http.get<never, never, GetOrdersReponse>(
  "http://localhost:3333/orders",
  async ({ request }) => {
    const { searchParams } = new URL(request.url);
    const pageIndex = searchParams.get("pageIndex")
      ? Number(searchParams.get("pageIndex"))
      : 0;

    const customerName = searchParams.get("customerName");
    const orderId = searchParams.get("orderId");
    const status = searchParams.get("status");

    let filteredOrders = orders;

    if (customerName) {
      filteredOrders = filteredOrders.filter((order) =>
        order.customerName.includes(customerName),
      );
    }

    if (orderId) {
      filteredOrders = filteredOrders.filter((order) =>
        order.orderId.includes(orderId),
      );
    }
    if (status) {
      filteredOrders = filteredOrders.filter(
        (order) => order.status === status,
      );
    }

    const paginatedOrders = filteredOrders.slice(
      pageIndex * 10,
      (pageIndex + 1) * 10,
    );

    return HttpResponse.json({
      orders: paginatedOrders,
      meta: {
        pageIndex: Math.floor(pageIndex / 10) + 1,
        perPage: 10,
        totalCount: filteredOrders.length,
      },
    });
  },
);
