import { http, HttpResponse } from "msw";
import { UpdateProfileBody } from "../updateProfile";

export const updateProfileMock = http.put<never, UpdateProfileBody>(
  "http://localhost:3333/profile",
  async ({ request }) => {
    const { name } = await request.json();

    if (name === "Pizza Ecker") {
      return new HttpResponse(null, { status: 204 });
    }
    return new HttpResponse(null, { status: 400 });
  },
);
