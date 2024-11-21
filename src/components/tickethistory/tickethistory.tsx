import React from 'react';
import '../../styles/tickethistory/tickethistory.scss';
import TicketHistoryProps from '../../@types/interface/Tickethistory/Tickethistory';


const TicketHistory: React.FC<TicketHistoryProps> = ({ selectedCard }) => {
    return (
        <div className="tickect-page">
            <div className="header">
                <h2>ServiceNow Ticket History</h2>
            </div>
            <div className="ticket-history-container">
                <table className="ticket-table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {selectedCard ? (
                            <tr>
                                <td>{selectedCard.lastReviewDate}</td>
                                <td>{selectedCard.name}</td>
                                <td>{selectedCard.lorem}</td>
                            </tr>
                        ) : (
                            <tr>
                                <td colSpan={3}>No card selected</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TicketHistory;
