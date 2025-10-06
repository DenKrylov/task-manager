import { TaskList } from 'widgets/taskList/ui/TaskList';
import styles from './TaskPage.module.css';

export function TaskPage() {
  return (
    <div className={styles.taskPage}>
      <div className={styles.header}>
        <h1>Мои задачи</h1>
        <p>Управляйте своими задачами эффективно</p>
      </div>
      <TaskList />
    </div>
  );
}
