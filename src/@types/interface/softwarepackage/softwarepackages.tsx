interface SoftwarePackageProps {
    packages: { name: string; lastReviewDate: string; lorem: string }[];
    selectedCardIndex: number | null;
    onCardSelect: (index: number | null) => void; // Allow `null` as a valid value
}

export default SoftwarePackageProps;