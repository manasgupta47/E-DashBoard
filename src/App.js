import './App.css';
import Nav from './component/Nav'
import Footer from './component/Footer';
import SignUp from './component/SignUp';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import PrivateComponent from './component/PrivateComponent'
import Login from './component/Login';
import AddProduct from './component/addProduct';
import ProductList from './component/productList';
import UpdateProduct from './component/updateProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route element={<PrivateComponent/>}>
        <Route path='/' element={<ProductList/>}/>
        <Route path='/add' element={<AddProduct/>}/>
        <Route path='/update/:id' element={<UpdateProduct/>}/>
        <Route path='/logout' element={<h1>Logout Product</h1>}/>
        <Route path='/profile' element={<h1>Profile Product</h1>}/>
        </Route>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
<Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
