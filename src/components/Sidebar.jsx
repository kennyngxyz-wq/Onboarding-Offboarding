import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    const menuItems = [
        { path: '/', label: 'Dashboard', icon: '📊' },
        { path: '/onboarding', label: 'New Onboarding', icon: '➕' },
        { path: '/offboarding', label: 'Offboarding', icon: '📤' },
    ];

    return (
        <aside className="sidebar">
            <div className="sidebar-content">
                <div className="sidebar-section">
                    <h3 className="sidebar-heading">Main Menu</h3>
                    <nav className="sidebar-nav">
                        {menuItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`sidebar-link ${isActive(item.path) ? 'active' : ''}`}
                            >
                                <span className="sidebar-icon">{item.icon}</span>
                                <span className="sidebar-label">{item.label}</span>
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className="sidebar-section">
                    <h3 className="sidebar-heading">Quick Stats</h3>
                    <div className="sidebar-stats">
                        <div className="sidebar-stat">
                            <span className="sidebar-stat-value">12</span>
                            <span className="sidebar-stat-label">Pending Onboardings</span>
                        </div>
                        <div className="sidebar-stat">
                            <span className="sidebar-stat-value">3</span>
                            <span className="sidebar-stat-label">Pending Offboardings</span>
                        </div>
                    </div>
                </div>

                <div className="sidebar-footer">
                    <div className="sidebar-footer-text">
                        <span>Hunter Douglas</span>
                        <span className="sidebar-footer-subtitle">Employee Portal v1.0</span>
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
