import './App.css'
import { Route, Routes } from 'react-router';
import AppLayout from './layout/AppLayout';
import LandingPage from './components/LandingPage';

function App() {

  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path='/' element={<LandingPage />}/>
      </Route>
    </Routes>
  )
}
export default App;
