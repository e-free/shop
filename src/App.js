import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './includes/Main';
import Header from './includes/Header';
import Footer from './includes/Footer';
import About from './pages/About';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Contacts from './pages/Contacts';
import Banner from './includes/Banner';
import Cart from './pages/Cart';
import Order from './pages/Order';
import Page404 from './pages/Page404';

function App() {
  return (
   
      <>

        <Header />        

        
        <Main>
        <Banner/>
        <Routes>
		    	<Route path='' element={<Home />} />
		    	<Route path='about' element={<About />} />
		    	<Route path='catalog' element={<Catalog />} />
		    	<Route path='contacts' element={<Contacts />} />
          <Route path='cart' element={<Cart/>} />
          <Route path='order' element={<Order/>} />
          <Route path='*' element={<Page404 />} />
	    	</Routes>
        </Main>

        <Footer />
      </>
    
  );
}

export default App;
