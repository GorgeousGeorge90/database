import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import NewFormCard from "../modules/NewFormCard/NewFormCard";
import RouteLayout from "./RouteLayout";
import CardsPage from "../pages/CardsPage/CardsPage";
import GalleryPage from "../pages/GalleryPage/GalleryPage";
import ContactPage from "../pages/ContactPage/ContactPage";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<RouteLayout/>}>
            <Route path='cards' element={<CardsPage/>}/>
            <Route path='new' element={<NewFormCard/>}/>
            <Route path='gallery' element={<GalleryPage/>}/>
            <Route index  element={<ContactPage/>}/>
        </Route>
    )
)

export default router