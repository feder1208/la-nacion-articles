/* eslint-disable jest/no-mocks-import */
import React from 'react'
import { Article } from '../components/article';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import articleMock from "../__mocks__/articleMock.json";

/* test("renders component", () => {
    const {container} = render(<Article article={articleMock}/>);
    expect(container).not.toBeEmptyDOMElement();
    expect(screen.getAllByRole('heading')).toBeTruthy();
    expect(screen.getByRole('img')).toBeTruthy();
    expect(screen.getByText(/Che Guevara/i)).toBeTruthy();
  });
  test("No debería renderizar con los parametros incorrectos", () => {
    const { container } = render(<Card />);
    expect(container).toBeEmptyDOMElement();
  });
}); */

describe("components-Card", () => {
    test("Should render with the correct params", () => {
      const { container } = render(<Article article={articleMock} />);
      expect(container).not.toBeEmptyDOMElement();
      expect(screen.getAllByRole('heading')).toBeTruthy();
      expect(screen.getByRole('img')).toBeTruthy();
      expect(screen.getByText(/cuba/i)).toBeTruthy();
    });
  });

