import Error from "./components/NotFound"
import Home from "./components/Home";
import HomeLayout from './Layouts/HomeLayout'
import SearchLayout from './Layouts/SearchLayout'
import About from "./components/About";
import Contact from "./components/Contact";
import Movie from "./components/Movie";
import TV from "./components/TV";
import Search from "./components/Search";
import Detail from "./components/Detail";
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<HomeLayout />} errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="search" element={<SearchLayout />}>
        <Route index element={<Search />} />
        <Route path='movie' element={<Movie />} />
        <Route path='tv' element={<TV />} />
      </Route>
      <Route path="movie/:id" element={<Detail />} />
      <Route path="tv/:id" element={<Detail />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
  )
  return (
    <RouterProvider router={router} />
  )
}
export default App
