import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Login from './pages/Login';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

import ProtectedRoute from './Api/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path='/checkout' element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
        <Route path='/Cart' element={<ProtectedRoute><Cart /></ProtectedRoute>} />
        <Route path='/notification' />
        <Route path='*' element='not found' />
      </Routes>
    </div>
  );
}

export default App;
