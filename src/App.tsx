import './App.css'
import { Route, Routes } from 'react-router';
import AppLayout from './layout/AppLayout';
import NavigationPage from './assets/pages/NavigationPage';
import Profile from './assets/pages/Profile';
import AboutPage from './assets/pages/AboutPage';

function App() {

  return (
    <Routes>
      <Route path='/navigation' element={<NavigationPage />}/>

      <Route element={<AppLayout />}>
          <Route path='/' element={<Profile />} />
          <Route path='/about' element={<AboutPage />} />
        
      </Route>
    </Routes>
  )
}
export default App;
