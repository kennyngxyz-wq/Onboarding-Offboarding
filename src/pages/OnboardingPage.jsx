import OnboardingForm from '../components/OnboardingForm';
import './OnboardingPage.css';

function OnboardingPage() {
    return (
        <div className="onboarding-page">
            <div className="page-header">
                <div>
                    <h1 className="page-title">New Employee Onboarding</h1>
                    <p className="page-subtitle">Complete the form below to initiate the onboarding process for a new employee</p>
                </div>
            </div>

            <div className="info-banner fade-in">
                <div className="info-banner-icon">ℹ️</div>
                <div className="info-banner-content">
                    <strong>Onboarding Checklist</strong>
                    <p>This form will initiate the employee provisioning process including Microsoft 365 license assignment, D365 F&O permissions, and equipment allocation. Please ensure all required information is accurate before submission.</p>
                </div>
            </div>

            <OnboardingForm />
        </div>
    );
}

export default OnboardingPage;
