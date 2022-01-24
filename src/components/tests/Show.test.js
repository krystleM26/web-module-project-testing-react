import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Show from './../Show';

const showData = {
    name: '',
    summary: '',
    seasons:[
        {

            id: 0,
            name: '',
            episodes: []
        }
    ]
}

test('renders without errors', ()=>{
    render(<Show show={showData}/>)
});

test('renders Loading component when prop show is null', () => {
    render(<Show show={null}/>)
    const loading = screen.queryByText('Fetching Data...')
  
    
  
});


test('renders same number of options seasons are passed in', ()=>{
    render(<Show/>);

});

test('handleSelect is called when an season is selected', () => {});

test('component renders when no seasons are selected and when rerenders with a season passed in', () => {});
