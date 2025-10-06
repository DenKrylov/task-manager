import { useState, useMemo, useCallback, useEffect } from 'react';
import { useGetTasksQuery } from 'entities/task/api/tasksApi';
import { Task } from 'entities/task/model/types';

export type Filter = 'all' | 'completed' | 'incomplete';

export function useTasks() {
  const { data: remoteTasks, isLoading, error } = useGetTasksQuery();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<Filter>('all');

  useEffect(() => {
    if (remoteTasks) {
      setTasks(remoteTasks);
    }
  }, [remoteTasks]);

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

  const removeTask = useCallback((id: number) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  }, []);

  return {
    tasks: filteredTasks,
    filter,
    setFilter,
    removeTask,
    isLoading,
    error,
  };
}