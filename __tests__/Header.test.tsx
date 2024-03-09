import { render, fireEvent, screen } from "@testing-library/react";
import Header from "../src/components/Header";

describe("Header Component", () => {
  it("should render header correctly", () => {
    const mockOnSearch = jest.fn();
    render(<Header onSearch={mockOnSearch} />);

    const searchInput = screen.getByLabelText("Buscar usuário");
    expect(searchInput).toBeInTheDocument();
  });

  it("should call onSearch function when search button is clicked with non-empty input", () => {
    const mockOnSearch = jest.fn();
    render(<Header onSearch={mockOnSearch} />);

    const searchInput = screen.getByLabelText("Buscar usuário");
    const searchButton = screen.getByRole("button");

    fireEvent.change(searchInput, { target: { value: "chandlerbing" } });

    fireEvent.click(searchButton);

    expect(mockOnSearch).toHaveBeenCalledWith("chandlerbing");
  });

  it("should not call onSearch function when search button is clicked with empty input", () => {
    const mockOnSearch = jest.fn();
    render(<Header onSearch={mockOnSearch} />);

    const searchButton = screen.getByRole("button");

    fireEvent.click(searchButton);

    expect(mockOnSearch).not.toHaveBeenCalled();
  });
});
