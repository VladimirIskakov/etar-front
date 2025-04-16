import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { PortfolioPage } from './pages/PortfolioPage';
import NotFoundPage from './pages/NotFoundPage';
import { LandingPage } from './pages/LandingPage';
import CommercialOfferPage from './pages/CommercialOfferPage';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<LandingPage/> } />
          <Route path="/portfolio/:id" element={<PortfolioPage />} />
          <Route path="/offer" element={<CommercialOfferPage />} />
          <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;