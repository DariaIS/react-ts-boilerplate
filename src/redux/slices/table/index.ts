import {PayloadAction, createSlice} from '@reduxjs/toolkit';

import {tableType} from '@src/types';

interface tableState {
    table: tableType[];
}

const initialState: tableState = {
    table: [
        {
            username: 'Dashka',
            action: 'logged out',
            action_created_at: new Date().getTime(),
        },
        {
            username: 'Brennan55',
            action: 'signed in',
            action_created_at: new Date('05/07/2003').getTime(),
        },
        {
            username: 'Dortha.Rohan',
            action: 'logged in',
            action_created_at: new Date('01/10/2004').getTime(),
        },
        {
            username: 'Aileen74',
            action: 'logged out',
            action_created_at: new Date('08/04/2018').getTime(),
        },
        {
            username: 'Hulda',
            action: 'signed in',
            action_created_at: new Date('11/02/2020').getTime(),
        },
        {
            username: 'Brennan55',
            action: 'signed in',
            action_created_at: new Date('10/06/2017').getTime(),
        },
    ],
};

const tableSlice = createSlice({
    name: 'table',
    initialState,
    reducers: {
        remove: (state, action: PayloadAction<tableType>) => {
            const index = state.table.findIndex((object) => {
                return (
                    object.username === action.payload.username &&
                    object.action === action.payload.action &&
                    object.action_created_at ===
                        action.payload.action_created_at
                );
            });
            state.table = [
                ...state.table.slice(0, index),
                ...state.table.slice(index + 1),
            ];
        },
    },
});

export const {remove} = tableSlice.actions;

export default tableSlice.reducer;
