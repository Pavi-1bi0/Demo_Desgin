import React, { useState } from 'react';
import '../../styles/dashboard/dashboard.scss';
import img from '../../assets/dashboard/img.jpg';
import SoftwarePackage from '../softwarepackage/softwarepackage';
import PackageDetails from '../softwarepackgaedetails/packagedetail';
import TicketHistory from './tickethistory/tickethistory';
import Tickectdetails from './ticketdetails/tickectdetails';



const Review: React.FC = () => {
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
              <SoftwarePackage/>
              <PackageDetails/>
            </div>
            <div className='ticket-section'>
                <TicketHistory/>
                <Tickectdetails/>
            </div>
        </div>
    );
};

export default Review;