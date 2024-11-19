import React, { useState } from 'react';
import '../../styles/softwarepackage/package.scss';

const SoftwarePackage: React.FC = () => {
    const [packages, setPackages] = useState([
        { name: 'HYPERV STOP', lastReviewDate: '5/29/2023', lorem: 'Heres the updated code for your component' },
        { name: 'Google Chrome', lastReviewDate: '5/30/2022', lorem: 'Heres the updated code for your component ' },
        { name: 'Image Ware Form Manager', lastReviewDate: '5/20/2023', lorem: 'Heres the updated code for your component' },
        { name: 'IBM Operational Decision Manager - Rule', lastReviewDate: '6/29/2023', lorem: 'Heres the updated code for your component' }
    ]);

    const addPackage = () => {
        setPackages([
            ...packages,
            { name: 'New Package ' + (packages.length + 1), lastReviewDate: '11/19/2024', lorem: 'Heres the updated code for your component ' }
        ]);
    };

    return (
        <div className="package-section">
            <h3 className="left-title">Client Software Package</h3>
            <div className="software-package">
                {packages.map((pkg, index) => (
                    <div key={index} className="package-item">
                        <span className="package-number">{index + 1}. </span>
                        <div className="package-details">
                            <span className="package-name">{pkg.name}</span>
                            <div className="details-row">
                                <span className="review-date">LastReviewDate: {pkg.lastReviewDate}</span>
                                <span className="package-description">Lorem: {pkg.lorem}</span>
                            </div>
                        </div>
                        <button className="go-to-cmdb-btn">
                            <a href="#!" className="go-to-cmdb">Go to CMDB</a>
                        </button>
                    </div>
                ))}
            </div>
            {/* <button className="add-package-btn" onClick={addPackage}>
                Add Package
            </button> */}
        </div>
    );
};

export default SoftwarePackage;
