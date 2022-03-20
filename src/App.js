import { Routes, Route } from 'react-router-dom';
import useFirstLoad from './hooks/useFirstLoad';
import Home from './pages/Home';
import AddCategory from './pages/category/AddCategory';
import AllCategory from './pages/category/AllCategory';


function App() {

  useFirstLoad();

  return (
    <>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/addCategory" element={ <AddCategory />} />
        <Route path="/allCategory" element={ <AllCategory />} />
      </Routes>
    </>
  );
}

export default App;