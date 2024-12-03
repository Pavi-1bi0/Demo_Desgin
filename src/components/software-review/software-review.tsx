import React, { useState } from 'react';
import '../../styles/software-review/software-review.scss';
import SoftwarePackage from '../softwarepackage/softwarepackage';
import PackageDetails from '../softwarepackgaedetails/packagedetail';
import TicketHistory from '../tickethistory/tickethistory';
import Tickectdetails from '../ticketdetails/tickectdetails';
import Navbar from '../navbar/navbar';
import Sidebar from '../sidebar/sidebar';
import { Checkbox } from '@mui/material';
import babel from '@babel/core';



const SoftwareDashboard: React.FC = () => {

    const [packages] = useState([
        { name: 'HYPERV STOP', lastReviewDate: '5/29/2023', lorem: 'Heres the updated code for your component' },
        { name: 'Google Chrome', lastReviewDate: '5/30/2022', lorem: 'Heres the updated code for your component ' },
        { name: 'Image Ware Form Manager', lastReviewDate: '5/20/2023', lorem: 'Heres the updated code for your component' },
        { name: 'IBM Operational Decision Manager - Rule', lastReviewDate: '6/29/2023', lorem: 'Heres the updated code for your component' }
    ]);
    const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null);

    const [checked, setChecked] = useState(true); // Default ticked state

    const handleCheckboxChange = () => {
      setChecked(!checked);
    };


    return (
        <div className='software-reviwe-page'>
            <Navbar toggleSidebar={function (): void {
                throw new Error('Function not implemented.');
            }} />
            <Sidebar isSidebarOpen={false} setIsSidebarOpen={function (isOpen: boolean): void {
                throw new Error('Function not implemented.');
            }} />
            <div className="software-review-center">
                <header className="header">
                    <h1>Client Software Package Review Center</h1>
                    <div className='sub-header'>
                        {/* <img src={img} alt="" /> */}
                        <p>Owner: <strong>Alan Lee</strong></p>
                        <p># of Software: <strong>4</strong></p>
                        <p>
                            Action Required Software:
                            {/* <input
                                type="checkbox"
                                checked={checked}
                                onChange={handleCheckboxChange}
                                className="custom-checkbox"
                            /> */}
                            <Checkbox  defaultChecked />
                        </p>
                    </div>
                </header>
                <div className="package-section">
                    <SoftwarePackage

                        packages={packages}
                        selectedCardIndex={selectedCardIndex}
                        onCardSelect={setSelectedCardIndex}
                    />
                    <PackageDetails />
                </div>
                <div className='ticket-section'>
                    <TicketHistory
                        selectedCard={selectedCardIndex !== null ? packages[selectedCardIndex] : null} />
                    <Tickectdetails />
                </div>
            </div>
        </div>
    );
};

export default SoftwareDashboard;
;