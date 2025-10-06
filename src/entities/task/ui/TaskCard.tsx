import { memo } from 'react';
import { Task } from '../model/types';
import styles from './TaskCard.module.css';

interface TaskCardProps {
  task: Task;
  onRemove?: (id: number) => void;
}

export const TaskCard = memo(function TaskCard({ task, onRemove }: TaskCardProps) {
  return (
    <div className={`${styles.taskCard} ${task.completed ? styles.completed : ''}`}>
      <div className={styles.content}>
        <span className={styles.title}>{task.todo}</span>
        <span className={styles.status}>
          {task.completed ? '✅' : '⏳'}
        </span>
      </div>
      {onRemove && (
        <button
          className={styles.removeButton}
          onClick={() => onRemove(task.id)}
          aria-label="Удалить задачу"
        >
          🗑️
        </button>
      )}
    </div>
  );
});
