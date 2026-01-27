import './App.css'
import { Route, Routes } from 'react-router';
import AppLayout from './layout/AppLayout';
import LandingPage from './components/LandingPage';
import Profile from './components/Profile';

function App() {

  return (
    <Routes>
      <Route path='/' element={<LandingPage />}/>
      <Route element={<AppLayout />}>
        <Route path='/profile' element={<Profile />}/>
      </Route>
    </Routes>
  )
}
export default App;
