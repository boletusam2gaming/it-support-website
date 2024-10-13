import React from "react";
import './Homepage.css';

function Homepage(){
    const [isNetworkSetupOpen, setIsNetworkSetupOpen] = React.useState(false);
    const [isSoftwareInstallationOpen, setIsSoftwareInstallationOpen] = React.useState(false);
    const [isHardwareSoftwareRepairOpen, setIsHardwareSoftwareRepairOpen] = React.useState(false);
    const [isTechnicalServicesOpen, setIsTechnicalServicesOpen] = React.useState(false);

    const toggleNetworkSetup = () => {
        setIsNetworkSetupOpen(!isNetworkSetupOpen);
    }

    const toggleSoftwareInstallation = () => {
        setIsSoftwareInstallationOpen(!isSoftwareInstallationOpen);
    }
    const toggleHardwareSoftwareRepair = () => {
        setIsHardwareSoftwareRepairOpen(!isHardwareSoftwareRepairOpen);
    }
    const toggleTechnicalServices = () => {
        setIsTechnicalServicesOpen(!isTechnicalServicesOpen);
    }

    return(
        <div className="homepage">
            <h1>Welcome to IT support</h1>
            <p>Providing you with the best IT support for your business</p>
            <div className="services">
                <h2>Our Services</h2>
                <ul>
                    <li> <button onClick={toggleTechnicalServices} className="dropdown-button">
                    Technical Services {isTechnicalServicesOpen ? "▲" : "▼"}
                        </button>
                        {isTechnicalServicesOpen && (
                        <ul>
                            <li>IT Support</li>
                            <li>System Maintenance</li>
                            <li>Technical Consulting</li>
                        </ul>
                        )} 
                    </li>

                    <li>
                        <button onClick={toggleNetworkSetup} className="dropdown-button">
                        Network Setup {isNetworkSetupOpen ? "▲" : "▼"}
                        </button>
                        {isNetworkSetupOpen && (
                        <ul>
                            <li>Router Configuration</li>
                            <li>Network Security</li>
                            <li>Network Troubleshooting</li>
                        </ul>
                        )}                        
                    </li>

                    <li>
                    <button onClick={toggleSoftwareInstallation} className="dropdown-button">
                    Software Installation {isSoftwareInstallationOpen ? "▲" : "▼"}
                        </button>
                        {isSoftwareInstallationOpen && (
                        <ul>
                            <li>Operating System Installation</li>
                            <li>Application Installation</li>
                            <li>Software Updates</li>
                        </ul>
                        )} 


                    </li>

                    <li> <button onClick={toggleHardwareSoftwareRepair} className="dropdown-button">
                    Hardware/Software Repair  {isHardwareSoftwareRepairOpen ? "▲" : "▼"}
                        </button>
                        {isHardwareSoftwareRepairOpen && (
                        <ul>
                            <li>Hardware Diagnostics</li>
                            <li>Software Troubleshooting</li>
                            <li>Repair Services</li>
                        </ul>
                        )} 
                    </li>
                    
                </ul>
            </div>
        </div>
    )
}

export default Homepage;