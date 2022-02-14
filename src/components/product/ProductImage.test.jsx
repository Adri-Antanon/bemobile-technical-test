import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import ProductImage from './ProductImage';

test('Should render product image as metalgreymon ', () => {
  const image = {
    imgUrl:
      'https://media.nauticamilanonline.com/product/figura-metal-greymon-digimon-adventure-22cm-800x800.jpg',
    name: 'metalgreymon',
  };
  const component = render(
    <ProductImage imgUrl={image.imgUrl} name={image.name} />,
  );

  component.getAllByAltText(/metalgreymon/i);
});
