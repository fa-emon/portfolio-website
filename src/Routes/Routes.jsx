import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Learning from "../components/Learning/Learning";
import Projects from "../components/Projects/Projects";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/learning',
                element: <Learning></Learning>
            },
            {
                path: '/projects',
                element: <Projects></Projects>
            }
        ]
    }
])