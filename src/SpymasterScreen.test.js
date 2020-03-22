import React from "react";
import { render } from "@testing-library/react";

import SpymasterScreen from "./SpymasterScreen";
import { RED_AGENT, BLUE_AGENT } from "./agentList";

describe("SpymasterScreen", () => {
  it("should have a red indicator for red double agent", () => {
    const { getByTestId } = render(<SpymasterScreen board={[]} doubleAgent={RED_AGENT} />);

    expect(getByTestId("spymaster-board")).toHaveClass("red-agent");
  });

  it("should have a blue indicator for blue double agent", () => {
    const { getByTestId } = render(<SpymasterScreen board={[]} doubleAgent={BLUE_AGENT} />);

    expect(getByTestId("spymaster-board")).toHaveClass("blue-agent");
  });

  it("should not have an indicator when doubleAgent is not specified", () => {
    const { getByTestId } = render(<SpymasterScreen board={[]} />);

    expect(getByTestId("spymaster-board")).not.toHaveClass("blue-agent");
    expect(getByTestId("spymaster-board")).not.toHaveClass("red-agent");
  });
});
