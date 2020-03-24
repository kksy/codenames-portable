import React from "react";
import { render } from "@testing-library/react";

import AgentScreen from "./AgentScreen";
import { RED_AGENT, BLUE_AGENT, BYSTANDER, ASSASSIN } from "./agentList";

describe("AgentScreen", () => {
  describe("Board cell", () => {
    it("has unselected cell style when unselected", () => {
      const cell = {
        selected: false,
        codeName: "code name",
        position: [0, 0],
        agent: BYSTANDER,
      };
      const { getByText } = render(<AgentScreen board={[cell]} />);
      expect(getByText("code name")).toHaveStyle("background-color: #CFCFCF");
    });

    it("has bystander cell style when selected bystander", () => {
      const cell = {
        selected: true,
        codeName: "code name",
        position: [0, 0],
        agent: BYSTANDER,
      };
      const { getByText } = render(<AgentScreen board={[cell]} />);
      expect(getByText("code name")).toHaveStyle("background-color: #F8E3A3");
    });

    it("has blue agent cell style when selected blue agent", () => {
      const cell = {
        selected: true,
        codeName: "code name",
        position: [0, 0],
        agent: BLUE_AGENT,
      };
      const { getByText } = render(<AgentScreen board={[cell]} />);
      expect(getByText("code name")).toHaveStyle("background-color: #2680C2");
    });

    it("has red agent cell style when selected red agent", () => {
      const cell = {
        selected: true,
        codeName: "code name",
        position: [0, 0],
        agent: RED_AGENT,
      };
      const { getByText } = render(<AgentScreen board={[cell]} />);
      expect(getByText("code name")).toHaveStyle("background-color: #D64545");
    });

    it("has assassin cell style when selected assassin", () => {
      const cell = {
        selected: true,
        codeName: "code name",
        position: [0, 0],
        agent: ASSASSIN,
      };
      const { getByText } = render(<AgentScreen board={[cell]} />);
      expect(getByText("code name")).toHaveStyle("background-color: #888");
    });
  });
});
