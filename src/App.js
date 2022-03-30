import { Routes, Route } from 'react-router-dom';
import useFirstLoad from './hooks/useFirstLoad';
import Home from './pages/Home';
import Error from './pages/Error';

import AddCategory from './pages/category/AddCategory';
import AllCategory from './pages/category/AllCategory';
import EditCategory from './pages/category/EditCategory';

import AddSubCategory from './pages/subCategery/AddSubCategory';
import AllSubCategory from './pages/subCategery/AllSubCategory';
import EditSubCategory from './pages/subCategery/EditSubCategory';

import AllProduct from './pages/product/AllProduct';
import AddProduct from './pages/product/AddProduct';
import EditProduct from './pages/product/EditProduct';
import ViewPorduct from './pages/product/ViewPorduct';

import AddSupplier from './pages/supplier/AddSupplier';
import AllSupplier from './pages/supplier/AllSupplier';
import EdiSupplier from './pages/supplier/EdiSupplier';
import ViewSupplier from './pages/supplier/ViewSupplier';

import AllCustomer from './pages/customer/AllCustomer';
import AddCustomer from './pages/customer/AddCustomer';
import EdiCustomer from './pages/customer/EdiCustomer';

import PurchaseProduct from './pages/purchase/PurchaseProduct';
import AllPurchase from './pages/purchase/AllPurchase';
import ViewPurchase from './pages/purchase/ViewPurchase';



function App() {

  useFirstLoad();

  return (
    <>
      <Routes>
        <Route path="/" element={ <Home />} />

        <Route path="/category/add" element={ <AddCategory />} />
        <Route path="/category" element={ <AllCategory />} />
        <Route path="/category/edit/:id" element={ <EditCategory />} />

        <Route path="/subCategory" element={ <AllSubCategory />} />
        <Route path="/subCategory/add" element={ <AddSubCategory />} />
        <Route path="/subCategory/edit/:id" element={ <EditSubCategory />} />

        <Route path="/product" element={ <AllProduct />} />
        <Route path="/product/:id" element={ <ViewPorduct />} />
        <Route path="/product/add" element={ <AddProduct />} />
        <Route path="/product/edit/:id" element={ <EditProduct />} />

        <Route path="/supplier" element={ <AllSupplier />} />
        <Route path="/supplier/:id" element={ <ViewSupplier />} />
        <Route path="/supplier/add" element={ <AddSupplier />} />
        <Route path="/supplier/edit/:id" element={ <EdiSupplier />} />

        <Route path="/customer" element={ <AllCustomer />} />
        <Route path="/customer/add" element={ <AddCustomer />} />
        <Route path="/customer/edit/:id" element={ <EdiCustomer />} />

        <Route path="/purchase" element={ <AllPurchase />} />
        <Route path="/purchase/:id" element={ <ViewPurchase />} />
        <Route path="/purchase/add" element={ <PurchaseProduct />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;