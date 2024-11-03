import { QueryClientProvider } from "@tanstack/react-query";
import { render } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { MemoryRouter } from "react-router-dom";
import { SignIn } from "./SignIn";
import { queryClient } from "@/lib/reactQuery";
describe("SignIn", () => {
  it("should set default email input value if email is present on search params", () => {
    const wrapper = render(
      <>
        <SignIn />
      </>,
      {
        //Using MemoryRouter to simulate the current page path
        wrapper: ({ children }) => {
          return (
            <HelmetProvider>
              <MemoryRouter
                initialEntries={["/sign-in?email=johndoe@example.com"]}
              >
                <QueryClientProvider client={queryClient}>
                  {children}
                </QueryClientProvider>
              </MemoryRouter>
            </HelmetProvider>
          );
        },
      },
    );

    const emailInput = wrapper.getByLabelText("Seu e-mail") as HTMLInputElement;
    expect(emailInput.value).toEqual("johndoe@example.com");
  });
});
