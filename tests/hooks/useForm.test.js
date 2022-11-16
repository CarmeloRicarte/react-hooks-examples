import { act, fireEvent, renderHook, screen } from "@testing-library/react";
import { expect } from "vitest";
import { useForm } from "../../src/hooks/useForm";

describe("Test of useForm hook", () => {
  const initialForm = {
    name: "Carmelo",
    email: "carmelo@gmail.com",
  };

  test("should return default values", () => {
    const { result } = renderHook(() => useForm(initialForm));
    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });

  test("should change the name value of form", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const newValue = "Joan";
    const { onInputChange } = result.current;
    act(() => {
      onInputChange({ target: { name: "name", value: newValue } });
    });
    expect(result.current.formState.name).toEqual(newValue);
    expect(result.current.name).toEqual(newValue);
  });

  test("should reset form to initial state", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const newValue = "Joan";
    const { onInputChange, onResetForm } = result.current;
    act(() => {
      onInputChange({ target: { name: "name", value: newValue } });
      onResetForm();
    });
    expect(result.current.formState.name).toEqual(initialForm.name);
    expect(result.current.formState.email).toEqual(initialForm.email);
    expect(result.current.name).toEqual(initialForm.name);
    expect(result.current.email).toEqual(initialForm.email);
  });
});
