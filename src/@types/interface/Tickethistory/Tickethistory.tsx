interface TicketHistoryProps {
    selectedCard: { name: string; lastReviewDate: string; lorem: string } | null;
    isItemLoading: boolean; // Add this property
}

export default TicketHistoryProps;
