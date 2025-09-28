import styles from './FilterButton.module.css';

interface FilterButtonProps {
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

export function FilterButton({ children, isActive, onClick }: FilterButtonProps) {
  return (
    <button
      className={`${styles.filterButton} ${isActive ? styles.active : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
