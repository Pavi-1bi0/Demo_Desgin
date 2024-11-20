import React from 'react';
import '../../../styles/dashboard/tickectdetails/ticketdetails.scss';

const Tickectdetails: React.FC = () => {
  return (
    <div className="servicenow-details">
      <h3 className="title">
        ServiceNow Ticket Details 
      </h3>
      <div className="details-container">
        <div className="detail-row">
          <span>SNOW Ticket #</span> <strong>RTM0731176</strong>
        </div>
        <div className="detail-row">
          <span>Ticket State</span> <strong>Closed Complete</strong>
        </div>
        <div className="detail-row">
          <span>Ticket Stage</span> <strong>Closed</strong>
        </div>
        <div className="detail-row">
          <span>Ticket Creation Date</span> <strong>2024-06-23</strong>
        </div>
        <div className="detail-row">
          <span>Ticket Close Date</span> <strong>2024-06-23</strong>
        </div>
        <div className="detail-row">
          <span>Requestor Name</span> <strong>Yuka Nakashima</strong>
        </div>
        <div className="detail-row">
          <span>Support Team</span> <strong>JP WPS</strong>
        </div>
        <div className="detail-row">
          <span>Support Person</span> <strong>Isao Saito</strong>
        </div>
      </div>
    </div>
  );
};

export default Tickectdetails;
