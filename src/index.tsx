import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CounterApp from "./CounterApp";
import {Provider} from "react-redux";
import {store} from "./state/store";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <CounterApp/>
    </Provider>
);