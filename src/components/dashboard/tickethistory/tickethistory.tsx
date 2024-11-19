import React from "react";
import "../../../styles/dashboard/tickethistory/tickethistory.scss";

const TicketHistory: React.FC = () => {
    return (
        <div className="tickect-page">
            <div className="header">
                <h2>ServiceNow Ticket History</h2>

            </div>
            <div className="ticket-history-container">
                {/* Header Section */}
                {/* Table Section */}
                <table className="ticket-table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Ticket Number</th>
                            {/* <th>Description</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2024-06-23</td>
                            <td>RITM0731176</td>
                            <td>ソフトウェアの削除またはパッケージの</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default TicketHistory;
