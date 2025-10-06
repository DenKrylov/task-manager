import { useState, useMemo, useCallback } from 'react';
import { Task } from 'entities/task/model/types';

export type Filter = 'all' | 'completed' | 'incomplete';

const initialTasks: Task[] = [
  { id: '1', title: 'Изучить React', completed: true },
  { id: '2', title: 'Изучить TypeScript', completed: true },
  { id: '3', title: 'Изучить FSD архитектуру', completed: false },
  { id: '4', title: 'Создать проект', completed: false },
];

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [filter, setFilter] = useState<Filter>('all');

  const filteredTasks = useMemo(() => {
    switch (filter) {
      case 'completed':
        return tasks.filter(task => task.completed);
      case 'incomplete':
        return tasks.filter(task => !task.completed);
      default:
        return tasks;
    }
  }, [tasks, filter]);

  const removeTask = useCallback((id: string) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  }, []);

  return {
    tasks: filteredTasks,
    filter,
    setFilter,
    removeTask,
  };
}