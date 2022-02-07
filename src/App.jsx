import { Route, Routes, Navigate } from 'react-router-dom';

import ProductDetails from './pages/ProductDetails';
import ProductList from './pages/ProductList';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/products" />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/products/:productId" element={<ProductDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
