import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import { About } from './components/About';
import { Navbar } from './components/Navbar';
import { OrderSummary } from './components/OrderSummary';
import { NoMatch } from './components/NoMatch';
import { Products } from './components/Products';
import { NewProducts } from './components/NewProducts';
import { FeaturedProducts } from './components/FeaturedProducts';
import { Users } from './components/Users';
import { UserDetails } from './components/UserDetails';
import { Admin } from './components/Admin';
import { Profile } from './components/Profile';
import { AuthProvider } from './components/Auth';
import { Login } from './components/Login';
import { RequireAuth } from './components/RequireAuth';

function App() {
  return (
    <AuthProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About /> } />
        <Route path='order-summary' element={<OrderSummary /> } />
        <Route path='products' element={<Products /> } >
          <Route index element={< FeaturedProducts />} />
          <Route path='featured' element={< FeaturedProducts />} />
          <Route path='new' element={< NewProducts />} />
        </Route>
        <Route path='users' element={<Users />} >
          <Route path=':userId' element={<UserDetails />} />
          <Route path='admin' element={<Admin />} />
        </Route>
        <Route path='profile' element={ <RequireAuth><Profile /></RequireAuth> } />
        <Route path='login' element={<Login /> } />
        <Route path='*' element={< NoMatch />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
