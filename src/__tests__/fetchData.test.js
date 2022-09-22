/* eslint-disable jest/no-mocks-import */

import { fetchData } from "../services/fetchData";
import fetchDataMock from "../__mocks__/fetchDataMock.json";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(fetchDataMock),
  })
);

describe("Test the fetchData function", () => {
  let articles;
  beforeEach(async () => {
    articles = await fetchData();
  });

  it("The articles should be returned", () => {
    expect(articles).toEqual(fetchDataMock.articles);
  });
  
  it("Should call fetch with the correct param", async () => {
    expect(fetch).toBeCalledWith(`https://api-test-ln.herokuapp.com/articles`);
  });
});
