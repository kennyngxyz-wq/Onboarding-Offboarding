import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import OnboardingPage from './pages/OnboardingPage';
import OffboardingPage from './pages/OffboardingPage';
import './index.css';

function App() {
    return (
        <Router>
            <div className="app-layout">
                <Header />
                <Sidebar />
                <main className="main-content">
                    <div className="page-container">
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/onboarding" element={<OnboardingPage />} />
                            <Route path="/offboarding" element={<OffboardingPage />} />
                        </Routes>
                    </div>
                </main>
            </div>
        </Router>
    );
}

export default App;
