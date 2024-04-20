import {RouterProvider} from "react-router-dom";
import Routes from "./utiles/routes/index";
import {Suspense} from "react";
import Loading from "./components/App/Loading";

function App() {
    return (
        <Suspense fallback={<Loading/>}>
            <RouterProvider router={Routes}/>
        </Suspense>
    )
}

export default App
