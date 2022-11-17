import { render, screen } from "@testing-library/react";
import { expect } from "vitest";
import { UserContext } from "../../src/useContext/context/UserContext";
import { HomePage } from "../../src/useContext/HomePage";

describe("Test of <HomePage />", () => {
  const user = {
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
  };

  test("should show the component without the user", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText("user-info");
    expect(preTag.textContent).toBe("null");
  });

  test("should show the component with the user", () => {
    render(
      <UserContext.Provider value={{ user }}>
        <HomePage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText("user-info");
    expect(preTag.textContent).toEqual(JSON.stringify(user, null, 3));
  });
});
