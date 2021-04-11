import React from 'react';
import { render } from '@testing-library/react';
import { Users } from './Users';

test('render component', () => {
    const {getByText} = render(<Users/>);
    expect(getByText("Hello world")).toBeInTheDocument();
});
