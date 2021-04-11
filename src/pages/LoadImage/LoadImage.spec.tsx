import React from 'react';
import { render } from '@testing-library/react';
import { LoadImage } from './LoadImage';

test('render component', () => {
    const {getByText} = render(<LoadImage/>);
    expect(getByText("Hello world")).toBeInTheDocument();
});
