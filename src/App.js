import { Routes, Route } from 'react-router-dom';
import useFirstLoad from './hooks/useFirstLoad';
import Home from './pages/Home';
import Error from './pages/Error';
import AddCategory from './pages/category/AddCategory';
import AllCategory from './pages/category/AllCategory';
import EditCategory from './pages/category/EditCategory';


function App() {

  useFirstLoad();

  return (
    <>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/category/add" element={ <AddCategory />} />
        <Route path="/category" element={ <AllCategory />} />
        <Route path="/category/edit/:id" element={ <EditCategory />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;