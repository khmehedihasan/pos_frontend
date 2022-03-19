import { Routes, Route } from 'react-router-dom';
import AddCategory from './pages/category/AddCategory';
import Home from './pages/Home';
import useFirstLoad from './hooks/useFirstLoad';

function App() {

  useFirstLoad();

  return (
    <>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/addCategory" element={ <AddCategory />} />
      </Routes>
    </>
  );
}

export default App;