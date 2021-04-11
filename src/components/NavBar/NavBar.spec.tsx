import React from 'react';
import { render } from '@testing-library/react';
import { NavBar } from './NavBar';

test('render component', () => {
    const {getByText} = render(<NavBar/>);
    expect(getByText("Hello world")).toBeInTheDocument();
});
