import React, { useState } from 'react';
import '../../styles/softwarepackagedetail/packagedetails.scss';
import User from '../../@types/interface/packagedetails/packagedetails';
import { Checkbox, useMediaQuery, useTheme } from '@mui/material';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';

interface PackageDetailsProps {
    inputs: {
        input1: string; input2: string; input3: string; input4: string; input5: string; input6: string;
    };
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: () => void;
}
const PackageDetails: React.FC<PackageDetailsProps> = ({
    inputs,
    handleInputChange,
}) => {
    const [users] = useState<User[]>([
        { id: 1, name: 'Nagayoshi, (Takayuki)', status: 'Active', department: 'Technology Foundation (Div X)', email: 'alan.lee@nnlife.co.jp' },
    ]);
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));


    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);



    // const addUser = () => {
    //     const newUser: User = {
    //         id: users.length + 1,
    //         name: `User ${users.length + 1}`,
    //         status: 'Inactive',
    //         department: 'Department X',
    //         email: `user${users.length + 1}@example.com`,
    //     };
    //     setUsers([...users, newUser]);
    // };



    return (
        <div className="software-package-details">
            <div className="right-title">
                <h3 >Client Software Package Details</h3>
            </div>
            <div className="package-detail">
                <div className="detail-item">
                    <span>Asset Owner</span><strong>Alan Lee</strong>
                    <label>
                        {/* Input 1:{" "} */}
                        <input
                            type="text"
                            name="input1"
                            value={inputs.input1}
                            onChange={handleInputChange}
                        />
                    </label>
                </div>

                <div className="detail-item">
                    <span>Delegated Asset Owner</span><strong>Ronio Caragay</strong>
                    <label>
                        {/* Input 2:{" "} */}
                        <input
                            type="text"
                            name="input2"
                            value={inputs.input2}
                            onChange={handleInputChange}
                        />
                    </label>
                </div>

                <div className="detail-item">
                    <span>Version</span><strong>9.24</strong>
                    <label>
                        {/* Input 3:{" "} */}
                        <input
                            type="text"
                            name="input3"
                            value={inputs.input3}
                            onChange={handleInputChange}
                        />
                    </label>
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
                    <label>
                        {/* Input 4:{" "} */}
                        <input
                            type="text"
                            name="input4"
                            value={inputs.input4}
                            onChange={handleInputChange}
                        />
                    </label>
                </div>

                <div className="detail-item">
                    <span>IDN Owner</span><strong>Ronio Caragay</strong>
                    <label>
                        {/* Input 5:{" "} */}
                        <input
                            type="text"
                            name="input5"
                            value={inputs.input5}
                            onChange={handleInputChange}
                        />
                    </label>
                </div>

                <div className="detail-item">
                    <span>AD Group Owner</span><strong>Missing</strong>
                    <label>
                        {/* Input 6:{" "} */}
                        <input
                            type="text"
                            name="input6"
                            value={inputs.input6}
                            onChange={handleInputChange}
                        />
                    </label>
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
                    <Checkbox defaultChecked className='checkbox' />
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
                                                <Checkbox defaultChecked />
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



                <button className="review-complete" onClick={handleOpen}>
                    Review Complete
                </button>
                <Dialog
                    fullScreen={fullScreen}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="responsive-dialog-title"
                >
                    <DialogTitle id="responsive-dialog-title">
                        {"Submit Review?"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Are you sure you want to submit your review?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={handleClose} className='cancel-btn'>
                            cancel
                        </Button>
                        <Button onClick={handleClose} autoFocus className='submit-btn'>
                            submit
                        </Button>
                    </DialogActions>
                </Dialog>

            </div>
        </div>
    );
};

export default PackageDetails;
