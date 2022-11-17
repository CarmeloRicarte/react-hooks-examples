import { fireEvent, render, screen } from "@testing-library/react";
import { useContext } from "react";
import { expect, vi } from "vitest";
import { UserContext } from "../../src/useContext/context/UserContext";
import { LoginPage } from "../../src/useContext/LoginPage";

describe("Test of <LoginPage />", () => {
  test("should show the component without the user", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText("user-info");
    expect(preTag.textContent).toBe("null");
  });

  test("should call to setUser when click on button", () => {
    const setUserMock = vi.fn();

    render(
      <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    );
    const button = screen.getByTestId("login-button");
    fireEvent.click(button);
    expect(setUserMock).toHaveBeenCalledWith({
      id: 1,
      name: "John Doe",
      email: "johndoe@example.com",
    });
  });
});
