import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar'; // Import Sidebar component
import CalenderPage from './components/CalenderPage';
import SummaryPage from './components/SummaryPage';

const App = () => {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar />
        <main className="flex-1">
          <div className="container mx-auto px-4 py-6">
            <Routes>
              <Route path="/" element={<CalenderPage />} />
              <Route path="/summary" element={<SummaryPage />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
};

export default App;
