import { chooseRandomWords } from "./wordList";

describe("wordList", () => {
  describe("chooseRandomWords", () => {
    it("should generate list of 25 words", () => {
      const randomWords = chooseRandomWords();
      expect(randomWords.length).toEqual(25);
    });

    it("should return strings", () => {
      const wordList = Array(25)
        .fill(0)
        .map(() => ({ front: "word", back: "word" }));
      const randomWords = chooseRandomWords("seed", wordList);

      randomWords.forEach(word => {
        expect(word).toBe("word");
      });
    });
  });
});
