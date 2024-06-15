import './App.css';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const PaymentSuccess = lazy(() => import('./pages/PaymentSuccess'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/payment-success' element={<PaymentSuccess />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
export default App;