import 'bootstrap/dist/css/bootstrap.min.css'
import {Routes, Route, Outlet, Navigate} from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Errors from './Pages/Errors/Errors';
import Products from './Pages/Products/Products';
import ProductAdd from './Pages/Products/ProductAdd';
import ProductEdit from './Pages/Products/ProductEdit';
import ProductDelete from './Pages/Products/ProductDelete';
import Profile from './Pages/Profile/Profile';
import Orders from './Pages/Orders/Orders';
import Sidebar from './Layouts/Sidebar';
import Url from './Helpers/Url';
import Checkout from './Pages/Checkout/Checkout';
import Thankyou from './Pages/Checkout/Thankyou';

const url = new Url();

const ProtectedRoute = () => {
  const isAuth = true;

  return isAuth ? <Outlet />: <Navigate to='/login'/>
}

function App() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-3'>
          <Sidebar />
        </div>
        <div className='col-9'>
        <Routes>
        <Route path={url.home} element={<Home />}/>
        <Route path={url.about} element={<About />}/>
        
        <Route path='/products'>
            <Route path='' element={<Products />}/>
            <Route path='add' element={<ProductAdd />}/>
            <Route path='edit/:productId/:productSlug' element={<ProductEdit />}/>
            <Route path='delete' element={<ProductDelete />}/>
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route path='/ca-nhan' element={<Profile />}/>
          <Route path='/don-hang' element={<Orders />}/>
        </Route>

        <Route path='/thanh-toan' element={<Checkout />}/>
        <Route path='/cam-on' element={<Thankyou />}/>
        
        <Route path='*' element={<Errors />}/>
      </Routes>
        </div>
      </div>

    </div>
    
  );
}

export default App;

/*
1. login: /auth/login
2. regsiter: /auth/register
3. forgot-password: /auth/forgot-password
4. active: /auth/active

/products
/products/add
/products/edit
/products/delete

/admin/products
/admin/products/add
/admin/products/edit
/admin/products/delete

/admin/posts
/admin/posts/add
/admin/posts/edit
/admin/posts/delete
*/