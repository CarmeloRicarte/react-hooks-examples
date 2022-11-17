import { fireEvent, render, renderHook, screen } from "@testing-library/react";
import { beforeEach, expect, vi } from "vitest";
import { MultipleCustomHooks } from "../../src/examples";
import { useCounter } from "../../src/hooks";
import { useFetch } from "../../src/hooks/useFetch";
vi.mock("../../src/hooks/useFetch");
vi.mock("../../src/hooks/useCounter");

describe("Tests of <MultipleCustomHooks />", () => {
  const mockIncrement = vi.fn();
  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  });
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("should match with the snapshot", () => {
    useFetch.mockReturnValue({
      data: [],
      error: null,
      isLoading: true,
    });

    const { container } = render(<MultipleCustomHooks />);
    expect(container).toMatchSnapshot();
  });

  test("should show a Quote", () => {
    useFetch.mockReturnValue({
      data: [
        {
          author: "Carmelo",
          quote: "This is a quote",
        },
      ],
      error: null,
      isLoading: false,
    });
    render(<MultipleCustomHooks />);
    const nextButton = screen.getByRole("button", { name: "Next quote" });
    expect(screen.getByText("This is a quote")).toBeTruthy();
    expect(screen.getByText("Carmelo")).toBeTruthy();
    expect(nextButton.disabled).toBeFalsy();
  });

  test("should call increment function", () => {
    useFetch.mockReturnValue({
      data: [
        {
          author: "Carmelo",
          quote: "This is a quote",
        },
      ],
      error: null,
      isLoading: false,
    });

    render(<MultipleCustomHooks />);
    const nextButton = screen.getByRole("button", { name: "Next quote" });
    fireEvent.click(nextButton);
    expect(mockIncrement).toHaveBeenCalled();
  });

  test("should show error message if there is an error loading a Quote", () => {
    useFetch.mockReturnValue({
      data: [],
      error: { message: "Quote not found" },
      isLoading: false,
    });
    render(<MultipleCustomHooks />);
    expect(screen.getByText("Quote not found")).toBeTruthy();
  });
});
