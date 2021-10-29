import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import MainHeader from '../main-header/main-header'
import MainAbout from '../main-about/main-about';
import ProductsList from '../products-list/products-list';
import Footer from '../footer/footer';

function App() {
  const data = [
    {image: '/images/product1.png', title: 'Solimo Coffee Beans 2 kg', price: 10.73, id: 1},
    {image: '/images/product2.png', title: 'Presto Coffee Beans 1 kg', price: 15.99, id: 2},
    {image: '/images/product3.png', title: 'AROMISTICO Coffee 1 kg', price: 6.99, id: 3},

  ]

  return (
    <>
    <MainHeader/>
    <MainAbout/>
    <ProductsList data={data}/>
    <Footer/>
    </>
  );
}

export default App;
