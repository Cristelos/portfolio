import './App.scss';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { HomePage } from './pages/HomePage/HomePage';
import { AboutPage } from './pages/AboutPage/AboutPage';
import { ServicePage } from './pages/ServicesPage/ServicePage';
import { PortfolioPage } from './pages/PortfolioPage/PortfolioPage';

function App() {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/services' element={<ServicePage/>}/>
      <Route path='/portfolio' element={<PortfolioPage/>}/>
    </Routes>
   </Router>
  );
}

export default App;
