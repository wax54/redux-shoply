import { render, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './redux-setup/rootReducer';
const store = createStore(rootReducer);

const DEFAULT_OPTIONS = {
    initialEntries: ['/']
}

function preRender(options={}) {
    const newOptions = {
        initialEntries: 
            [...(options.initialEntries || []), ...DEFAULT_OPTIONS.initialEntries],
        context: 
            { ...DEFAULT_OPTIONS.context, ...(options.context || {}) }
    }
    //console.log('options: ', options, 'newOptions', newOptions);
    return newOptions;
}


function renderWithRedux(Component, options) {
    options = preRender(options);
    return render(
        <Provider store={store}>
            <MemoryRouter initialEntries={options.initialEntries}>
                    { Component }
            </MemoryRouter>
        </Provider>
    );
}

async function renderWithReduxAndWait(Component, options) {
    options = preRender(options);
    return await waitFor(() => render(
        <Provider store={store}>
            <MemoryRouter initialEntries={options.initialEntries}>
                {Component}
            </MemoryRouter>
        </Provider>
    ));
}



export { renderWithRedux, renderWithReduxAndWait}