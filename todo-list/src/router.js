import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { ShowToDoListView, EditToDoListView, AddToDoListView } from './views';
import Header from "./components/header/Header";

const router = createBrowserRouter([
    {
        path: '/',
        element: <>
            <Header />
            <ShowToDoListView />
        </>
    },
    {
        path: '/edit',
        element:
            <>
                <Header />
                <EditToDoListView />
            </>
    },
    {
        path: '/add',
        element:
            <>
                <Header />
                <AddToDoListView />
            </>
    }
]);

export default router;