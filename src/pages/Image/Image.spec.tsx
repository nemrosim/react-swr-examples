import React from 'react';
import { render } from '@testing-library/react';
import { Image } from './Image';

test('render component', () => {
    const {getByText} = render(<Image/>);
    expect(getByText("Hello world")).toBeInTheDocument();
});
