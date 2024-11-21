import React from 'react';
import '../../styles/softwarepackage/package.scss';
import SoftwarePackageProps from '../../@types/interface/softwarepackage/softwarepackages';

const SoftwarePackage: React.FC<SoftwarePackageProps> = ({ packages, selectedCardIndex, onCardSelect }) => {
    const handleCardClick = (index: number) => {
        onCardSelect(index === selectedCardIndex ? null : index); // Toggle selection for the same card
    };

    return (
        <div className="package-section">
            <h3 className="left-title">Client Software Package</h3>
            <div className="software-package">
                {packages.map((pkg, index) => (
                    <div
                        key={index}
                        className={`package-item card ${selectedCardIndex === index ? 'selected' : ''}`}
                        onClick={() => handleCardClick(index)}
                        style={{
                            color: selectedCardIndex === index ? 'white' : 'black',
                        }}
                    >
                        <span className="package-number">{index + 1}. </span>
                        <div className="package-details">
                            <span className="package-name">{pkg.name}</span>
                            <div className="details-row">
                                <span className="review-date">Last Review Date: {pkg.lastReviewDate}</span>
                                <span className="package-description">Lorem: {pkg.lorem}</span>
                            </div>
                        </div>
                        <button className="go-to-cmdb-btn">
                            <a href="#!" className="go-to-cmdb">Go to CMDB</a>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SoftwarePackage;
