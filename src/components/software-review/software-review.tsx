import React, { useState } from 'react';
import '../../styles/software-review/software-review.scss';
import SoftwarePackage from '../softwarepackage/softwarepackage';
import PackageDetails from '../softwarepackgaedetails/packagedetail';
import TicketHistory from '../tickethistory/tickethistory';
import Tickectdetails from '../ticketdetails/tickectdetails';
import Navbar from '../navbar/navbar';
import Sidebar from '../sidebar/sidebar';
import { Checkbox, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

const SoftwareDashboard: React.FC = () => {
    const [packages] = useState([
        { name: 'HYPERV STOP', lastReviewDate: '5/29/2023', lorem: 'Here is the updated code for your component' },
        { name: 'Google Chrome', lastReviewDate: '5/30/2022', lorem: 'Here is the updated code for your component' },
        { name: 'Image Ware Form Manager', lastReviewDate: '5/20/2023', lorem: 'Here is the updated code for your component' },
        { name: 'IBM Operational Decision Manager - Rule', lastReviewDate: '6/29/2023', lorem: 'Here is the updated code for your component' },
    ]);

    const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null);
    const [checked, setChecked] = useState(true); // Default ticked state
    const [isPopupOpen, setIsPopupOpen] = useState(false); // State for popup visibility
    const [popupData, setPopupData] = useState<{ name: string; lastReviewDate: string; lorem: string } | null>(null);
    const [hasSelectedBefore, setHasSelectedBefore] = useState(false); // Track if an item has been selected before

    const handleCheckboxChange = () => {
        setChecked(!checked);
    };

    const handleCardSelect = (index: number) => {
        setSelectedCardIndex(index);
        setPopupData(packages[index]);

        // Show popup only if an item has been selected before
        if (hasSelectedBefore) {
            setIsPopupOpen(true);
        } else {
            setHasSelectedBefore(true); // Set the flag after the first selection
        }
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false); // Close popup
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
                        <p>Owner: <strong>Alan Lee</strong></p>
                        <p># of Software: <strong>4</strong></p>
                        <p>
                            Action Required Software:
                            <Checkbox defaultChecked />
                        </p>
                    </div>
                </header>
                <div className="package-section">
                    <SoftwarePackage
                        packages={packages}
                        selectedCardIndex={selectedCardIndex}
                        onCardSelect={handleCardSelect}
                    />
                    <PackageDetails />
                </div>
                <div className='ticket-section'>
                    <TicketHistory
                        selectedCard={selectedCardIndex !== null ? packages[selectedCardIndex] : null} />
                    <Tickectdetails />
                </div>
            </div>

            {/* Popup for displaying package details */}
            <Dialog open={isPopupOpen} onClose={handleClosePopup}>
                <DialogTitle>Package Details</DialogTitle>
                <DialogContent>
                    {popupData && (
                        <>
                            <p><strong>Name:</strong> {popupData.name}</p>
                            <p><strong>Last Review Date:</strong> {popupData.lastReviewDate}</p>
                            <p>{popupData.lorem}</p>
                        </>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClosePopup} color="primary">Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default SoftwareDashboard;
