import React, { useState } from 'react';
import '../../styles/softwarepackagedetail/packagedetails.scss';
import User from '../../@types/interface/packagedetails/packagedetails';
import { Checkbox } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface InputFieldsProps {
    inputs: { [key: string]: string };
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: () => void;
}

const PackageDetails: React.FC<InputFieldsProps> = ({
    inputs,
    handleInputChange,
    handleSubmit,
}) => {
    const [users] = useState<User[]>([
        {
            id: 1,
            name: 'Nagayoshi, (Takayuki)',
            status: 'Active',
            department: 'Technology Foundation (Div X)',
            email: 'alan.lee@nnlife.co.jp',
        },
    ]);
    const [confirmMove, setConfirmMove] = useState(false);

    const inputLabels = [
        'Asset Owner',
        'Delegated Asset Owner',
        'Version',
        'CMDB Owner',
        'IDN Owner',
        'AD Group Owner',
    ];

    const handleConfirmMove = (move: boolean) => {
        setConfirmMove(false);
        if (move) {
            console.log('Move to the next item');
            // Add your logic for moving to the next item
        } else {
            console.log('Stay on this page');
            // Add your logic for staying on the current page
        }
    };

    const handleClose = () => setConfirmMove(false); // Close popup
    return (
        <div className="software-package-details">
            <div className="right-title">
                <h3>Client Software Package Details</h3>
            </div>
            <div className="package-detail">
                {inputLabels.slice(0, 3).map((label, index) => (
                    <div className="detail-item" key={`input${index + 1}`}>
                        <span>{label}</span>
                        <strong>
                            {index === 0
                                ? 'Alan Lee'
                                : index === 1
                                    ? 'Ronio Caragay'
                                    : '9.24'}
                        </strong>
                        <label>
                            <input
                                type="text"
                                name={`input${index + 1}`}
                                value={inputs[`input${index + 1}`]}
                                onChange={handleInputChange}
                            />
                        </label>
                    </div>
                ))}
                <div className="detail-item">
                    <span className="ad">AD Group</span>
                    <strong className="ad-str">GRAPAC-JP-Image</strong>
                </div>
                <div className="detail-item">
                    <span>IdN No</span>
                    <strong>Missing</strong>
                </div>
            </div>
            <div className="owner-title">
                <h4>Client Software Package Owner Details</h4>
            </div>
            <div className="owner-details">
                {inputLabels.slice(3).map((label, index) => (
                    <div className="detail-item" key={`input${index + 4}`}>
                        <span>{label}</span>
                        <strong>
                            {index === 0
                                ? 'Alan Lee'
                                : index === 1
                                    ? 'Ronio Caragay'
                                    : 'Missing'}
                        </strong>
                        <label>
                            <input
                                type="text"
                                name={`input${index + 4}`}
                                value={inputs[`input${index + 4}`]}
                                onChange={handleInputChange}
                            />
                        </label>
                    </div>
                ))}
            </div>
            <div className="title-sec">
                <h4 className="user-title">Client Software Package User List</h4>
                <div className="checkbox-wrapper">
                    <div className="user"> Disabled user:</div>
                    <Checkbox defaultChecked className="checkbox" />
                </div>
            </div>
            <div className="user-list-container">
                <div className="user-list">
                    {users.map((user) => (
                        <div className="user-row" key={user.id}>
                            <div className="user-number">{user.id}</div>
                            <div className="user-details">
                                <div className="user-info">
                                    <p className="user-name">
                                        <strong>{user.name}</strong>
                                    </p>
                                    <p>
                                        User Status:{' '}
                                        <span className={user.status.toLowerCase()}>
                                            {user.status}
                                        </span>
                                    </p>
                                </div>
                                <div className="user-meta">
                                    <p>{user.department}</p>
                                    <div className="remove-option">
                                        <label>
                                            Remove user from Software Package?
                                            <p>
                                                Action Required Software:
                                                <Checkbox defaultChecked />
                                            </p>
                                        </label>
                                    </div>
                                </div>
                                <p className="user-mail">
                                    <a href={`mailto:${user.email}`}>{user.email}</a>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="footer">
                <button className="review-complete" onClick={() => setConfirmMove(true)}>
                    Review Complete
                </button>

                {/* Custom Popup */}
                {/* Popup */}
                {confirmMove && (
                    <div
                        style={{
                            position: 'fixed',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            backgroundColor: 'white',
                            padding: '20px',
                            borderRadius: '8px',
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                            zIndex: 1000,
                            maxWidth: '400px',
                            width: '100%',
                        }}
                    >
                        {/* Cancel Button (Top-right corner) */}
                          {/* Cancel Icon (Top-right corner) */}
                    <button
                        onClick={handleClose}
                        style={{
                            position: 'absolute',
                            top: '10px',
                            right: '10px',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            padding: '0',
                        }}
                    >
                        <CloseIcon style={{ fontSize: '24px', color: '#dc3545' }} />
                    </button>

                        <h3 style={{color:'black'}}>we submit your data?</h3>
                        <div style={{ marginTop: '15px', textAlign: 'center' }}>
                            {/* Submit Button */}
                            <button
                                onClick={() => handleConfirmMove(true)}
                                style={{
                                    marginRight: '10px',
                                    padding: '10px 20px',
                                    backgroundColor: '#007bff',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                }}
                            >
                                submit
                            </button>
                            {/* Stay Button */}
                            <button
                                onClick={() => handleConfirmMove(false)}
                                style={{
                                    padding: '10px 20px',
                                    backgroundColor: '#dc3545',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                }}
                            >
                                cancel
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>

    );
};

export default PackageDetails;
