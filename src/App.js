import './App.min.css';
import FeaturedProducts from './components/Featured-Products-components/FeaturedProducts';
import Header from './components/Header-components/Header'
import Promo from './components/Promo-components/Promo'
import Showcase from './components/Showcase-components/Showcase'



function App() {
  return (
    <>
      <Header />
      <Showcase />
      <Promo />
      <FeaturedProducts />
         
    </>
  );
}

export default App;
