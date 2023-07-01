import { render, fireEvent, screen } from "@testing-library/react";
import Home from ".";
import userEvent from "@testing-library/user-event";

describe("<Home> component test", () => {
  beforeEach(() => {
    console.log = jest.fn();
  });

  it("제목 확인", () => {
    const { getByText } = render(<Home />);
    const mainTitle = getByText("One Step");
    expect(mainTitle).toBeInTheDocument();
  });

  it("userEvent input", async () => {
    const user = userEvent.setup();
    render(<Home />);
    await user.type(screen.getByPlaceholderText("목표를 입력하세요"), "hello");
    expect(screen.getByPlaceholderText("목표를 입력하세요")).toHaveValue(
      "hello"
    );
    expect(console.log).not.toHaveBeenCalled();
  });
});
