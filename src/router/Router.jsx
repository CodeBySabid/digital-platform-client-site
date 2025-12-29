import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../page/Home/Home/Home";
import Coverage from "../page/Coverage/Coverage";
import ErrorPage from "../error/ErrorPage";
import AboutUs, { Story, Mission, Success, Team } from "../page/AboutUs/AboutUs";
import AuthLayout from "../layout/AuthLayout";
import Login from "../page/Auth/Login/Login";
import Register from "../page/Auth/Register/Register";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'coverage',
                Component: Coverage,
                loader: () => fetch('/serviceCenters.json').then(res => res.json()),
            },
            {
                path: "about",
                Component: AboutUs,
                children: [
                    { index: true, element: <Story /> },
                    { path: "story", element: <Story /> },
                    { path: "mission", element: <Mission /> },
                    { path: "success", element: <Success /> },
                    { path: "team", element: <Team /> },
                ],
            },
            {
                path: "*",
                Component: ErrorPage,
            },
        ],
        hydrateFallbackElement: (
            <div className="flex items-center justify-center w-screen h-screen">
                <div>
                    <div
                        className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-yellow-500 mx-auto"
                    ></div>
                    <h2 className="text-zinc-900 dark:text-white mt-4">Loading...</h2>
                </div>
            </div>
        )
    },
    {
        path: '/',
        Component: AuthLayout,
        children: [
            {
                path: 'Register',
                Component: Register,
            },
            {
                path: '/login',
                Component: Login,
            },
        ]
    }
])
