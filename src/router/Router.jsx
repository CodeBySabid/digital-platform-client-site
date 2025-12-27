import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../page/Home/Home/Home";
import Coverage from "../page/Coverage/Coverage";
import ErrorPage from "../error/ErrorPage";
import AboutUs from "../page/AboutUs/AboutUs";

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
                Component: AboutUs
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
])
