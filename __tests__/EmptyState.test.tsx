import { render } from "@testing-library/react";

import EmptyState from "../src/components/EmptyState";

describe("EmptyState component", () => {
  it("should render text elements correctly", () => {
    const { getByText } = render(<EmptyState />);

    expect(
      getByText("Procure pelo Nome ou Nome de Usuário")
    ).toBeInTheDocument();
    expect(
      getByText(
        "Encontre os repositórios de algum usuário digitando no campo acima"
      )
    ).toBeInTheDocument();
  });

  it("should render Image component with alt text", () => {
    const { getByAltText } = render(<EmptyState />);

    expect(getByAltText("Buscar usuário")).toBeInTheDocument();
  });
});
