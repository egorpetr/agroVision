import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import DroneMonitoring from './pages/DroneMonitoring';
import SoilAnalysis from './pages/SoilAnalysis';
import Training from './pages/Training';
import Marketplace from './pages/Marketplace';
import MarketplaceAdmin from './pages/MarketplaceAdmin';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2e7d32',
    },
    secondary: {
      main: '#ff9800',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/drone-monitoring" element={<DroneMonitoring />} />
            <Route path="/soil-analysis" element={<SoilAnalysis />} />
            <Route path="/training" element={<Training />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/marketplace/admin" element={<MarketplaceAdmin />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App; 