import { generateAgentList, BLUE_AGENT, RED_AGENT, ASSASSIN } from "./agentList";

describe("agentList", () => {
  describe("generateAgentList", () => {
    it("generates a list of 25 items", () => {
      expect(generateAgentList().length).toEqual(25);
    });

    it("contains 1 ASSASSIN", () => {
      expect(generateAgentList().filter(item => item === ASSASSIN).length).toEqual(1);
    });

    describe("when double agent is RED_AGENT", () => {
      it("contains 9 red agents", () => {
        expect(generateAgentList(RED_AGENT).filter(item => item === RED_AGENT).length).toEqual(9);
      });

      it("contains 8 blue agents", () => {
        expect(generateAgentList(RED_AGENT).filter(item => item === BLUE_AGENT).length).toEqual(8);
      });
    });

    describe("when double agent is BLUE_AGENT", () => {
      it("contains 9 blue agents", () => {
        expect(generateAgentList(BLUE_AGENT).filter(item => item === BLUE_AGENT).length).toEqual(9);
      });

      it("contains 8 red agents", () => {
        expect(generateAgentList(BLUE_AGENT).filter(item => item === RED_AGENT).length).toEqual(8);
      });
    });
  });
});
