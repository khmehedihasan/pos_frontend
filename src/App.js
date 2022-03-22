import { Routes, Route } from 'react-router-dom';
import useFirstLoad from './hooks/useFirstLoad';
import Home from './pages/Home';
import Error from './pages/Error';

import AddCategory from './pages/category/AddCategory';
import AllCategory from './pages/category/AllCategory';
import EditCategory from './pages/category/EditCategory';

import AddSubCategory from './pages/sub categery/AddSubCategory';
import AllSubCategory from './pages/sub categery/AllSubCategory';
import EditSubCategory from './pages/sub categery/EditSubCategory';

import AllProduct from './pages/product/AllProduct';
import AddProduct from './pages/product/AddProduct';
import EditProduct from './pages/product/EditProduct';


function App() {

  useFirstLoad();

  return (
    <>
      <Routes>
        <Route path="/" element={ <Home />} />

        <Route path="/category/add" element={ <AddCategory />} />
        <Route path="/category" element={ <AllCategory />} />
        <Route path="/category/edit/:id" element={ <EditCategory />} />

        <Route path="/subCategory/add" element={ <AddSubCategory />} />
        <Route path="/subCategory" element={ <AllSubCategory />} />
        <Route path="/subCategory/edit/:id" element={ <EditSubCategory />} />

        <Route path="/product/add" element={ <AddProduct />} />
        <Route path="/product" element={ <AllProduct />} />
        <Route path="/product/edit/:id" element={ <EditProduct />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;