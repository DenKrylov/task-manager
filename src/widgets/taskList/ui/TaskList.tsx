import { FilterButton } from 'shared/ui/FilterButton';
import { TaskCard } from 'entities/task/ui/TaskCard';
import styles from './TaskList.module.css';
import { useTasks } from '../model/useTasks';

export function TaskList() {
  const { tasks, filter, setFilter, removeTask } = useTasks();

  const filters: Array<{ key: 'all' | 'completed' | 'incomplete'; label: string }> = [
    { key: 'all', label: 'Все' },
    { key: 'completed', label: 'Завершенные' },
    { key: 'incomplete', label: 'Незавершенные' },
  ];

  return (
    <div className={styles.taskList}>
      <div className={styles.filters}>
        {filters.map(({ key, label }) => (
          <FilterButton
            key={key}
            isActive={filter === key}
            onClick={() => setFilter(key)}
          >
            {label}
          </FilterButton>
        ))}
      </div>

      <div className={styles.tasks}>
        {tasks.length === 0 ? (
          <p className={styles.empty}>Задачи не найдены</p>
        ) : (
          tasks.map(task => (
            <TaskCard
              key={task.id}
              task={task}
              onRemove={removeTask}
            />
          ))
        )}
      </div>
    </div>
  );
}
