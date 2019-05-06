import React from "react";
import { render, fireEvent } from "react-testing-library";
import EnterSessionScreen from "./EnterSessionScreen";

describe("EnterSessionScreen", () => {
  it("submits sessionId text", async () => {
    const setSession = jest.fn();
    const sessionName = "secret";
    const { getByLabelText, getByText } = render(<EnterSessionScreen setSession={setSession} />);

    fireEvent.change(getByLabelText(/Enter a game session name/), { target: { value: sessionName } });
    fireEvent.submit(getByText(/Join/));

    expect(setSession).toHaveBeenCalledWith("secret");
  });
});
