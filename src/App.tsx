import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import  LandingPage  from './components/LandingPage';
import { DashboardLayout } from './components/DashboardLayout';
import { DashboardOverview } from './components/dashboard/DashboardOverview';
import { Customers } from './components/dashboard/Customers';
import { Orders } from './components/dashboard/Orders';
import { Analytics } from './components/dashboard/Analytics';
import { Messages } from './components/dashboard/Messages';
import { Settings } from './components/dashboard/Settings';
import { Login } from './components/Login';

function App() {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage isAuthenticated={isAuthenticated} />} />
        <Route 
          path="/login" 
          element={
            isAuthenticated ? 
            <Navigate to="/dashboard" replace /> : 
            <Login onLogin={login} />
          } 
        />
        <Route 
          path="/dashboard" 
          element={
            isAuthenticated ? 
            <DashboardLayout onLogout={logout} /> : 
            <Navigate to="/login" replace />
          }
        >
          <Route index element={<DashboardOverview />} />
          <Route path="customers" element={<Customers />} />
          <Route path="orders" element={<Orders />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="messages" element={<Messages />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;