import React from "react";
import { render, fireEvent, cleanup } from "react-testing-library";
import ChoosePlayerScreen from "./ChoosePlayerScreen";

describe("ChoosePlayerScreen", () => {
  afterEach(cleanup);
  it("sets as agent", async () => {
    const setRole = jest.fn();
    const { getByText } = render(<ChoosePlayerScreen setRole={setRole} />);

    fireEvent.click(getByText("Agent"));

    expect(setRole).toHaveBeenCalledWith("agent");
  });

  it("sets as spymaster", async () => {
    const setRole = jest.fn();
    const { getByText } = render(<ChoosePlayerScreen setRole={setRole} />);

    fireEvent.click(getByText("Spymaster"));

    expect(setRole).toHaveBeenCalledWith("spymaster");
  });
});
