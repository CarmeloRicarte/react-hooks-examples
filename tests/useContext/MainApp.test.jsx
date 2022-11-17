import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { expect } from "vitest";
import { MainApp } from "../../src/useContext";

describe("Tests of <MainApp />", () => {
  test("should show home page", () => {
    render(
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>
    );
    expect(screen.getByRole("heading", { level: 1 }).textContent).toContain(
      "HomePage"
    );
  });

  test("should show login page", () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <MainApp />
      </MemoryRouter>
    );
    expect(screen.getByRole("heading", { level: 1 }).textContent).toContain(
      "LoginPage"
    );
  });

  test("should show about page", () => {
    render(
      <MemoryRouter initialEntries={["/about"]}>
        <MainApp />
      </MemoryRouter>
    );
    expect(screen.getByRole("heading", { level: 1 }).textContent).toContain(
      "AboutPage"
    );
  });
});
