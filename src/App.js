
import './App.css';
import Container from 'react-bootstrap/Container';
import {Routes, Route} from 'react-router-dom'
import { Header } from './components/Header/Header';
import { Store } from './components/Store/Store';
import { About } from './components/About/About';

import ShoppingCartProvider from './Context/ShoppingCartContext';



function App() {
  return (<ShoppingCartProvider>

    <Header/>  
    
    <Container className=''>  
              <Routes>
               <Route path="/" element={<Store/>}></Route>
               <Route path="/store" element={<Store/>}></Route>
               <Route path="/about" element={<About/>}></Route>
              </Routes>
    </Container>
    </ShoppingCartProvider>);
}

export default App;
