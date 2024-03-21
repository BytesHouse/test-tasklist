import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import {store} from '../src/store/store'
import {Provider} from 'react-redux';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {SignInPage, TaskListPage} from './pages'
import RequireAuth from "./components/RequireAuth/RequireAuth";
import TaskPage from "./pages/TaskPage/TaskPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <RequireAuth><TaskListPage/></RequireAuth>,
    },
    {
        path: "/taskslist",
        element: <RequireAuth><TaskListPage/></RequireAuth>,
    },
    {
        path: "/taskslist/:id",
        element: <RequireAuth><TaskPage/></RequireAuth>,
    },
    {
        path: "/signin",
        element: <SignInPage/>,
    },
    {
        path: "*",
        element: <SignInPage/>,
    },
]);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
                <Provider store={store}>
                    <RouterProvider router={router}/>
                 </Provider>
    </React.StrictMode>
);


