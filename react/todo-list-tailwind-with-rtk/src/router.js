import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { ShowToDoListView, EditToDoListView, AddToDoListView } from './views';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <ShowToDoListView />
            },
            {
                path: '/edit',
                element: <EditToDoListView />
            },
            {
                path: '/add',
                element: <AddToDoListView />
            }
        ],
    },
]);

export default router;