import './App.min.css';
import TwoFor29 from './components/2For29-components/TwoFor29';
import TwoFor49 from './components/2For49-components/TwoFor49';
import BigSale from './components/Big-Sale-components/BigSale';
import FeaturedProducts from './components/Featured-Products-components/FeaturedProducts';
import Header from './components/Header-components/Header'
import OurSpeciality from './components/Our-Speciality-components/OurSpeciality';
import Promo from './components/Promo-components/Promo'
import Promo2 from './components/Promo2-components/Promo2';
import Showcase from './components/Showcase-components/Showcase'



function App() {
  return (
    <>
      <Header />
      <Showcase />
      <Promo />
      <FeaturedProducts />
      <Promo2 />
      <OurSpeciality />
      <TwoFor29 />
      <TwoFor49 />
      <BigSale />
      
         
    </>
  );
}

export default App;
