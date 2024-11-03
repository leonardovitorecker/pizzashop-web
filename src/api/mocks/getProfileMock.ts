import { http, HttpResponse } from "msw";
import { GetProfileResponse } from "../getProfile";

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  "http://localhost:3333/me",
  () => {
    return HttpResponse.json({
      id: "customer-user-id",
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "+55 11 99999-9999",
      role: "manager",
      createdAt: new Date(),
      updatedAt: null,
    });
  },
);
