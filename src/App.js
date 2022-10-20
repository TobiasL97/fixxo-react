import './App.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from './Views/HomeView';
import NotFoundView from './Views/NotFoundView';
import ContactsView from './Views/ContactsView';
import ProductDetailsView from './Views/ProductDetailsView';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomeView />} />
        <Route path="/products/:name" element={<ProductDetailsView />} />
        <Route path="/contacts" element={<ContactsView />} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
