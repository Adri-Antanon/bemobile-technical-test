import { Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';

import ProductDetailsPage from './pages/ProductDetailsPage';
import ProductListPage from './pages/ProductListPage';
import NotFound from './pages/NotFound';
import Layout from './components/layout/Layout';
import CartProvider from './store/CartProvider';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate replace to="/products" />} />
            <Route path="/products" element={<ProductListPage />} />
            <Route
              path="/products/:productId"
              element={<ProductDetailsPage />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
