import { render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders tasks", () => {
    const { container } = render(<App />);

    expect(container).toHaveTextContent("아무일도 하기 싫다");
  });
});
