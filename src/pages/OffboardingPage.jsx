import OffboardingForm from '../components/OffboardingForm';
import './OffboardingPage.css';

function OffboardingPage() {
    return (
        <div className="offboarding-page">
            <div className="page-header">
                <div>
                    <h1 className="page-title">Employee Offboarding</h1>
                    <p className="page-subtitle">Process employee departure and revoke access permissions</p>
                </div>
            </div>

            <div className="warning-banner fade-in">
                <div className="warning-banner-icon">⚠️</div>
                <div className="warning-banner-content">
                    <strong>Important Notice</strong>
                    <p>This process will revoke the employee's access to Microsoft 365 services, D365 F&O systems, and other company resources. Please ensure all necessary knowledge transfer and handover processes are completed before submission.</p>
                </div>
            </div>

            <OffboardingForm />
        </div>
    );
}

export default OffboardingPage;
