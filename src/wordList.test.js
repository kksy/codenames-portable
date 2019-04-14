import { chooseRandomWords } from "./wordList";

describe("wordList", () => {
  describe("chooseRandomWords", () => {
    it("should generate list of 25 words", () => {
      const randomWords = chooseRandomWords();
      expect(randomWords.length).toEqual(25);
    });
  });
});
