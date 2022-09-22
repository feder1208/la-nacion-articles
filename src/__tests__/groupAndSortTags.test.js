/* eslint-disable jest/no-mocks-import */
import { groupAndSortTags } from "../utils/groupAndSortTags";
import fetchDataMock from "../__mocks__/fetchDataMock.json";

describe("Group the tags in ascending order", () => {
    test("Should return 10 objects by count", () => {
        
      const tags = groupAndSortTags(fetchDataMock.articles);
      expect(tags).toHaveLength(10);
      expect(tags).toMatchSnapshot();
    });
  });