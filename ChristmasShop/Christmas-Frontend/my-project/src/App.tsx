import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from 'react-router-dom';
import './assets/css/website.css'

import { Root } from './routes/Root';
import { Home } from './routes/Home';
import { ProductPage } from './routes/ProductPage';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Root/>}>
    <Route index element={<Home/>}></Route>
    <Route path='products/:id' element={<ProductPage/>}></Route>
  </Route>
))

function App() {

  return (
    <>
      < RouterProvider router= {router}/>
    </>
  )
}

export default App
