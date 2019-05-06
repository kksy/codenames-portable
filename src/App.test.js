import React from "react";
import App from "./App";
import { render, fireEvent, cleanup, wait } from "react-testing-library";
import ChoosePlayerScreen from "./ChoosePlayerScreen";
import AgentScreen from "./AgentScreen";

describe("App", () => {
  let mockDb;
  let createNewBoard;
  let mockBoardService;
  beforeEach(() => {
    mockDb = {
      collection: () => ({
        doc: () => ({
          onSnapshot: jest.fn(),
          set: jest.fn().mockResolvedValue(""),
          get: jest.fn().mockResolvedValue({ exists: false }),
        }),
      }),
    };

    createNewBoard = jest.fn();
    mockBoardService = {
      createNewBoard,
      storeBoardChanges: jest.fn(),
    };
  });
  afterEach(cleanup);

  it("displays create session screen on startup", () => {
    const { getByText } = render(<App db={mockDb} boardService={mockBoardService} />);
    expect(getByText(/Enter a game session name/)).toBeDefined();
  });

  it("displays choose player screen after session and new board is created", async () => {
    const sessionName = "secret";
    const { getByText, getByLabelText } = render(<App db={mockDb} boardService={mockBoardService} />);

    fireEvent.change(getByLabelText(/Enter a game session name/), { target: { value: sessionName } });
    await wait(() => fireEvent.submit(getByText(/Join/)));

    expect(createNewBoard).toHaveBeenCalledWith(sessionName);
    expect(getByText("Agent")).toBeDefined();
    expect(getByText("Spymaster")).toBeDefined();
  });
});
