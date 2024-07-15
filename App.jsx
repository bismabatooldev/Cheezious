import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import ImBackDetail from './pages2/ImBackDetail'
import ShoppingCart from './pages/ShoppingCart';
import StartersDetail from './pages2/StartersDetail';
import Login from './auth/Login';
import Register from './auth/Register';
import SLocalDetail from './pages2/SLocalDetail';
import SoopDetail from './pages2/SoopDetail';
import CheezyDetail from './pages2/CheezyDetail';
import PizzaDetail from './pages2/PizzaDetail';


function App() {
  return (
    <div>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/prodA/:_id" element={<ImBackDetail />} />
    <Route path="/shop" element={<ShoppingCart />} />
    <Route path="/prodB/:id" element={<StartersDetail />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/prodC/:id" element={<SLocalDetail />} />
    <Route path="/prodD/:id" element={<SoopDetail />} />
    <Route path="/prodE/:id" element={<CheezyDetail />} />
    <Route path="/prodF/:id" element={<PizzaDetail />} />
    </Routes>
    </div>
  )
}

export default App