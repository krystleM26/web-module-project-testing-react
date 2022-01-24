import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { getAllByTestId, render, screen } from '@testing-library/react';
import Episode from './../Episode';


test("renders without error", () => {
   render (<Episode episode={[]}/>)
});

test("renders the summary test passed as prop", ()=>{
    render (<Episode episode={[]}/>)
    const summary = screen.queryAllByText(/episode summary/i)
    // expect(summary).toBeInTheDocument('')
    expect(summary).toBeTruthy();
    expect(summary).toHaveTextContent()

});

test("renders default image when image is not defined", ()=>{
    render(<Episode episode={[]}/>)
    const image = screen.queryAllByAltText('./stranger_things.png');

   

   
});
