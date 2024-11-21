import React, { useState } from 'react';
import '../../styles/dashboard/dashboard.scss';
import img from '../../assets/dashboard/img.jpg';
import SoftwarePackage from '../softwarepackage/softwarepackage';
import PackageDetails from '../softwarepackgaedetails/packagedetail';
import TicketHistory from '../tickethistory/tickethistory';
import Tickectdetails from '../ticketdetails/tickectdetails';



const SoftwareDashboard: React.FC = () => {

    const [packages] = useState([
        { name: 'HYPERV STOP', lastReviewDate: '5/29/2023', lorem: 'Heres the updated code for your component' },
        { name: 'Google Chrome', lastReviewDate: '5/30/2022', lorem: 'Heres the updated code for your component ' },
        { name: 'Image Ware Form Manager', lastReviewDate: '5/20/2023', lorem: 'Heres the updated code for your component' },
        { name: 'IBM Operational Decision Manager - Rule', lastReviewDate: '6/29/2023', lorem: 'Heres the updated code for your component' }
    ]);
    const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null);

    const [checked, setChecked] = useState(false);
  
    const handleCheckboxChange = () => {
      setChecked(!checked);
    };


    return (
        <div className="software-review-center">
            <header className="header">
                <h1>Client Software Package Review Center</h1>
                <div className='sub-header'>
                    <img src={img} alt="" />
                    <p>Owner: <strong>Alan Lee</strong></p>
                    <p># of Software: <strong>4</strong></p>
                    <p>
                        Action Required Software:
                        <input
                            type="checkbox"
                            checked={checked}
                            onChange={handleCheckboxChange}
                        />
                    </p>
                </div>
            </header>
            <div className="package-section">
              <SoftwarePackage
             
               packages={packages}
                selectedCardIndex={selectedCardIndex}
                onCardSelect={setSelectedCardIndex}
                />
              <PackageDetails/>
            </div>
            <div className='ticket-section'>
                <TicketHistory
                selectedCard={selectedCardIndex !== null ? packages[selectedCardIndex] : null}/>
                <Tickectdetails/>
            </div>
        </div>
    );
};

export default  SoftwareDashboard;
;