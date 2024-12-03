import React, { useState } from 'react';
import '../../styles/softwarepackagedetail/packagedetails.scss';
import User from '../../@types/interface/packagedetails/packagedetails';
import { Checkbox } from '@mui/material';


const PackageDetails: React.FC = () => {
    const [users, setUsers] = useState<User[]>([
        { id: 1, name: 'Nagayoshi, (Takayuki)', status: 'Active', department: 'Technology Foundation (Div X)', email: 'alan.lee@nnlife.co.jp' },
    ]);

    const addUser = () => {
        const newUser: User = {
            id: users.length + 1,
            name: `User ${users.length + 1}`,
            status: 'Inactive',
            department: 'Department X',
            email: `user${users.length + 1}@example.com`,
        };
        setUsers([...users, newUser]);
    };
    const [checked, setChecked] = useState(true); // Default ticked state

    const handleCheckboxChange = () => {
        setChecked(!checked);
    };
    return (
        <div className="software-package-details">
            <div className="right-title">
                <h3 >Client Software Package Details</h3>
            </div>
            <div className="package-detail">
                <div className="detail-item">
                    <span>Asset Owner</span><strong>Alan Lee</strong>
                    <input type="text" placeholder="Find items" />
                </div>

                <div className="detail-item">
                    <span>Delegated Asset Owner</span><strong>Ronio Caragay</strong>
                    <input type="text" placeholder="Find items" />
                </div>

                <div className="detail-item">
                    <span>Version</span><strong>9.24</strong>
                    <input type="text" placeholder="" />
                </div>

                <div className="detail-item">
                    <span className="ad">AD Group</span><strong className="ad-str">GRAPAC-JP-Image</strong>
                </div>

                <div className="detail-item">
                    <span>IdN No</span><strong>Missing</strong>
                </div>
            </div>
            <div className='owner-title'>
                <h4 >Client Software Package Owner Details</h4>
            </div>
            <div className="owner-details">
                <div className="detail-item">
                    <span>CMDB Owner</span><strong>Alan Lee</strong>
                    <input type="text" placeholder="Find items" />
                </div>

                <div className="detail-item">
                    <span>IDN Owner</span><strong>Ronio Caragay</strong>
                    <input type="text" placeholder="Find items" />
                </div>

                <div className="detail-item">
                    <span>AD Group Owner</span><strong>Missing</strong>
                    <input type="text" placeholder="" />
                </div>
            </div>

            <div className="title-sec">
                <h4 className="user-title">Client Software Package User List</h4>
                <div className="checkbox-wrapper">
                   <div className='user'> Disabled user:</div>
                    {/* <input
                        type="checkbox"
                        checked={checked}
                        onChange={handleCheckboxChange}
                        className="custom-checkbox"
                    /> */}
                   <Checkbox  defaultChecked className='checkbox' />
                </div>

                {/* <button className="add-user" onClick={addUser}>Add User</button> */}
            </div>

            <div className="user-list-container">
                <div className="user-list">
                    {users.map((user) => (
                        <div className="user-row" key={user.id}>
                            <div className="user-number">{user.id}</div>
                            <div className="user-details">
                                <div className="user-info">
                                    <p className='user-name'><strong>{user.name}</strong></p>
                                    <p>User Status: <span className={user.status.toLowerCase()}>{user.status}</span></p>
                                </div>
                                <div className="user-meta">
                                    <p>{user.department}</p>
                                    <div className="remove-option">
                                        <label>
                                            Remove user from Software Package?
                                            <p>
                                                Action Required Software:
                                                {/* <input
                                                    type="checkbox"
                                                    checked={checked}
                                                    onChange={handleCheckboxChange}
                                                    className="custom-checkbox"
                                                /> */}
                                                <Checkbox  defaultChecked  />
                                            </p>
                                        </label>
                                    </div>
                                </div>
                                <p className='user-mail'><a href={`mailto:${user.email}`}>{user.email}</a></p>

                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="footer">
                <button className="review-complete">Review Complete</button>
            </div>
        </div>
    );
};

export default PackageDetails;
