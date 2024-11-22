import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SummaryPage from './pages/SummaryPage';
import MindMapPage from './pages/MindMapPage';
import ScorecardPage from './pages/ScorecardPage';
import DashboardPage from './pages/DashboardPage';
import EventsPage from './pages/EventsPage';
import AppLayout from './components/ui/AppLayout';

const App = () => {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/summary" element={<SummaryPage />} />
          <Route path="/mindmap" element={<MindMapPage />} />
          <Route path="/scorecard" element={<ScorecardPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/events" element={<EventsPage />} />
        </Routes>
      </AppLayout>
    </Router>
  );
};

export default App;