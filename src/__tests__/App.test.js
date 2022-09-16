import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

test("App component test", () => {
    const {container, debug} = render(<App />)
    // debug();
  expect(container).toMatchSnapshot();
});
