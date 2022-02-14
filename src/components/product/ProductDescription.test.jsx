import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import ProductDescription from './ProductDescription';

describe('should render even with no value for that key', () => {
  it('render article title', () => {
    const product = {
      brand: 'Acer',
      model: 'Iconia Talk S',
      price: '170',
    };
    render(<ProductDescription product={product} />);

    const title = screen.getByText(/description/i);
    expect(title).toBeInTheDocument();
  });

  it('display a list with all the data ', () => {
    const product = {
      brand: 'Acer',
      model: 'Iconia Talk S',
      price: '170',
    };

    const component = render(<ProductDescription product={product} />);

    component.getAllByText(/acer/i);
    component.getAllByText(/iconia/i);
    component.getAllByText(/170/i);
  });

  it('display a list with no price', () => {
    const product = {
      brand: 'Acer',
      model: 'Iconia Talk S',
      price: '',
    };

    const component = render(<ProductDescription product={product} />);

    component.getAllByText(/acer/i);
    component.getAllByText(/iconia/i);
    component.getAllByText(/no data/i);
  });
});
