import { render } from "@testing-library/react";
import Home from ".";

describe("contentList test", () => {
  it("renders content", () => {
    const { getByText } = render(<Home />);
    const mainTitle = getByText("One Step");
    expect(mainTitle).toBeInTheDocument();
  });
});
