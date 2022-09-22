/* eslint-disable jest/no-mocks-import */
import { filterArticlesBySubtype } from "../utils/filterArticlesBySubtype";
import fetchDataMock from "../__mocks__/fetchDataMock.json";
import outputDataMock from "../__mocks__/outputDataMock.json";


  describe("Filter function", () => {
    test("It should filter only the articles by subtype 7", () => {
      const filteredArticles = filterArticlesBySubtype(fetchDataMock.articles)
      expect(filteredArticles.some(art => art.subtype !== "7")).toBeFalsy();
  
      expect(filteredArticles).toMatchSnapshot();
      expect(filteredArticles).toHaveLength(28);
      expect(filteredArticles).toStrictEqual(outputDataMock)
    //   expect(filterArticlesBySubtype()).toBe([]);
    });
  });