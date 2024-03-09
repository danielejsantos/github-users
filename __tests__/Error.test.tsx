import { render, screen } from "@testing-library/react";

import Error from "../src/components/Error";

describe("Error Component", () => {
  it("should render error message and image", () => {
    render(<Error />);

    const errorMessage = screen.getByText("Nenhum usuário encontrado");
    expect(errorMessage).toBeInTheDocument();

    const secondaryMessage = screen.getByText(
      "Verifique se a escrita está correta ou tente novamente"
    );
    expect(secondaryMessage).toBeInTheDocument();

    const errorImage = screen.getByAltText("Nenhum usuário encontrado");
    expect(errorImage).toBeInTheDocument();
  });
});
