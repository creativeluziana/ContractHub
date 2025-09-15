import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ContractsProvider } from './context/ContractsContext';
import ProtectedRoute from './components/ProtectedRoute';
import DashboardLayout from './components/Layout/DashboardLayout';
import UploadModal from './components/UploadModal';
import LoginPage from './pages/LoginPage';
import ContractsDashboard from './pages/ContractsDashboard';
import ContractDetail from './pages/ContractDetail';
import InsightsPage from './pages/InsightsPage';
import ReportsPage from './pages/ReportsPage';
import SettingsPage from './pages/SettingsPage';
import UploadContractPage from './pages/UploadContractPage';

function App() {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  return (
    <AuthProvider>
      <ContractsProvider>
        <Router>
          <div className="App">
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <DashboardLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate to="/dashboard" replace />} />
                <Route path="dashboard" element={<ContractsDashboard />} />
                <Route path="contracts/:id" element={<ContractDetail />} />
                <Route path="insights" element={<InsightsPage />} />
                <Route path="reports" element={<ReportsPage />} />
                <Route path="upload" element={<UploadContractPage />} />
                <Route path="settings" element={<SettingsPage />} />
              </Route>
            </Routes>
            
            <UploadModal 
              isOpen={isUploadModalOpen} 
              onClose={() => setIsUploadModalOpen(false)} 
            />
          </div>
        </Router>
      </ContractsProvider>
    </AuthProvider>
  );
}

export default App;
