import './App.css'
import { Route, Routes } from 'react-router';
import AppLayout from './layout/AppLayout';
import Profile from './assets/pages/ProfilePage';
import AboutPage from './assets/pages/AboutPage';
import ProjectsPage from './assets/pages/ProjectsPage';
import ActivitiesPage from './assets/pages/ActivitiesPage';
import CertificationsPage from './assets/pages/CertificationsPage';

function App() {

  return (
    <Routes>

      <Route element={<AppLayout />}>
          <Route path='/' element={<Profile />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/projects' element={<ProjectsPage />}/>
          <Route path='/activities' element={<ActivitiesPage />}/>
          <Route path='/certifications' element={<CertificationsPage />}/>

        
      </Route>
    </Routes>
  )
}
export default App;
