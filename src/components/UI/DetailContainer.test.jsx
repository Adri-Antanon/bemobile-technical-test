import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import DetailContainer from './DetailContainer';

let component;

describe('<DetailContainer />', () => {
  beforeEach(() => {
    component = render(
      <DetailContainer>
        <h1>This is a test</h1>
      </DetailContainer>,
    );
  });

  test('Should render its children ', () => {
    component.getByText(/test/i);
  });
});
