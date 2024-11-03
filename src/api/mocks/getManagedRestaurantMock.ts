import { http, HttpResponse } from "msw";
import { GetManagedRestaurantResponse } from "../getManagedRestaurant";

export const getManagedRestaurantMock = http.get<
  never,
  never,
  GetManagedRestaurantResponse
>("http://localhost:3333/managed-restaurant", async () => {
  return HttpResponse.json({
    id: "custom-restaurant-id",
    name: "Pizza Ecker",
    description: "Custom restaurant description",
    managerId: "custom-user-id",
    createdAt: new Date(),
    updatedAt: null,
  });
});
