import { Link } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
    const stats = [
        { label: 'Pending Onboardings', value: 12, icon: '👥', color: 'orange' },
        { label: 'Pending Offboardings', value: 3, icon: '📤', color: 'blue' },
        { label: 'This Month', value: 8, icon: '📅', color: 'green' },
        { label: 'Active Employees', value: 247, icon: '🏢', color: 'purple' }
    ];

    const recentActivity = [
        { type: 'onboarding', name: 'Alice Thompson', action: 'Onboarding completed', date: '2 hours ago', status: 'completed' },
        { type: 'offboarding', name: 'Mark Stevens', action: 'Offboarding in progress', date: '5 hours ago', status: 'pending' },
        { type: 'onboarding', name: 'Jennifer Lee', action: 'Licenses assigned', date: '1 day ago', status: 'completed' },
        { type: 'onboarding', name: 'Robert Garcia', action: 'Waiting for approval', date: '1 day ago', status: 'pending' },
        { type: 'offboarding', name: 'Susan Miller', action: 'Access revoked', date: '2 days ago', status: 'completed' }
    ];

    const quickActions = [
        { title: 'New Onboarding', description: 'Start a new employee onboarding process', icon: '➕', link: '/onboarding', color: 'primary' },
        { title: 'Offboarding', description: 'Process an employee departure', icon: '📤', link: '/offboarding', color: 'secondary' }
    ];

    return (
        <div className="dashboard">
            <div className="page-header">
                <div>
                    <h1 className="page-title">Dashboard</h1>
                    <p className="page-subtitle">Welcome to the Hunter Douglas Employee Portal</p>
                </div>
                <div className="page-actions">
                    <Link to="/onboarding" className="btn btn-primary">
                        <span>➕</span> New Onboarding
                    </Link>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="stats-grid">
                {stats.map((stat, index) => (
                    <div key={index} className="stat-card fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                        <div className={`stat-card-icon ${stat.color}`}>{stat.icon}</div>
                        <div className="stat-card-value">{stat.value}</div>
                        <div className="stat-card-label">{stat.label}</div>
                    </div>
                ))}
            </div>

            <div className="dashboard-grid">
                {/* Quick Actions */}
                <div className="card fade-in" style={{ animationDelay: '0.4s' }}>
                    <div className="card-header">
                        <h3 className="card-title">Quick Actions</h3>
                    </div>
                    <div className="quick-actions">
                        {quickActions.map((action, index) => (
                            <Link key={index} to={action.link} className={`quick-action-card ${action.color}`}>
                                <div className="quick-action-icon">{action.icon}</div>
                                <div className="quick-action-content">
                                    <h4 className="quick-action-title">{action.title}</h4>
                                    <p className="quick-action-description">{action.description}</p>
                                </div>
                                <span className="quick-action-arrow">→</span>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="card fade-in" style={{ animationDelay: '0.5s' }}>
                    <div className="card-header">
                        <h3 className="card-title">Recent Activity</h3>
                        <a href="#" className="action-link">View All →</a>
                    </div>
                    <div className="activity-list">
                        {recentActivity.map((activity, index) => (
                            <div key={index} className="activity-item">
                                <div className={`activity-icon ${activity.type}`}>
                                    {activity.type === 'onboarding' ? '👤' : '📤'}
                                </div>
                                <div className="activity-content">
                                    <div className="activity-header">
                                        <span className="activity-name">{activity.name}</span>
                                        <span className={`badge badge-${activity.status === 'completed' ? 'success' : 'warning'}`}>
                                            {activity.status}
                                        </span>
                                    </div>
                                    <p className="activity-action">{activity.action}</p>
                                    <span className="activity-date">{activity.date}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* License Overview */}
            <div className="card fade-in" style={{ animationDelay: '0.6s' }}>
                <div className="card-header">
                    <h3 className="card-title">License Overview</h3>
                    <p className="card-subtitle">Microsoft 365 license usage summary</p>
                </div>
                <div className="license-overview">
                    <div className="license-stat">
                        <div className="license-stat-header">
                            <span className="license-stat-name">Microsoft 365 E3</span>
                            <span className="license-stat-count">180 / 200</span>
                        </div>
                        <div className="license-progress">
                            <div className="license-progress-bar" style={{ width: '90%' }}></div>
                        </div>
                    </div>
                    <div className="license-stat">
                        <div className="license-stat-header">
                            <span className="license-stat-name">Microsoft 365 E5</span>
                            <span className="license-stat-count">45 / 50</span>
                        </div>
                        <div className="license-progress">
                            <div className="license-progress-bar" style={{ width: '90%' }}></div>
                        </div>
                    </div>
                    <div className="license-stat">
                        <div className="license-stat-header">
                            <span className="license-stat-name">Project Plan 3</span>
                            <span className="license-stat-count">12 / 25</span>
                        </div>
                        <div className="license-progress">
                            <div className="license-progress-bar low" style={{ width: '48%' }}></div>
                        </div>
                    </div>
                    <div className="license-stat">
                        <div className="license-stat-header">
                            <span className="license-stat-name">Power BI Pro</span>
                            <span className="license-stat-count">67 / 100</span>
                        </div>
                        <div className="license-progress">
                            <div className="license-progress-bar medium" style={{ width: '67%' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
