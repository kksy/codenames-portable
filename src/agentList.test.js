import { generateAgentList } from "./agentList";

describe("agentList", () => {
  describe("generateAgentList", () => {
    it("generates a list of 25 items", () => {
      expect(generateAgentList().length).toEqual(25);
    });

    it("contains 9 B agents", () => {
      expect(generateAgentList().filter(item => item === "B").length).toEqual(9);
    });

    it("contains 8 R agents", () => {
      expect(generateAgentList().filter(item => item === "R").length).toEqual(8);
    });

    it("contains 1 X agents", () => {
      expect(generateAgentList().filter(item => item === "X").length).toEqual(1);
    });
  });
});
