import { Routes, Route } from 'react-router-dom';
import AddCategory from './pages/category/AddCategory';
import Home from './pages/Home';

function App() {
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