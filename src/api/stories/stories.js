import { fakeRequest } from "../../utils/fakeRequest";
import stories from "../../mocks/stories";
import { deepCamelCase } from "../../utils/deepCamelCase";

const isSuccess = true;

export const fetchStories = () =>
  fakeRequest(isSuccess, stories).then(({ response }) =>
    deepCamelCase(response.items)
  );
