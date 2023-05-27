import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "@/components/SearchBar";

describe("SearchBar", () => {
  it("renders correctly", () => {
    render(<SearchBar value="" onChange={() => { }} />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
  });

  it("calls onChange when input value changes", () => {
    const onChangeMock = jest.fn();
    render(<SearchBar value="" onChange={onChangeMock} />);
    const inputElement = screen.getByRole("textbox");
    fireEvent.change(inputElement, { target: { value: "test" } });
    expect(onChangeMock).toHaveBeenCalledWith("test");
  });

  it("focuses on input when ⌘K is pressed", () => {
    render(<SearchBar value="" onChange={() => { }} />);
    const inputElement = screen.getByRole("textbox");
    const keyDownEvent = new KeyboardEvent("keydown", { key: "k", metaKey: true });
    window.dispatchEvent(keyDownEvent);
    expect(inputElement).toHaveFocus();
  });
});