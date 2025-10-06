import { TaskPage } from 'pages/tasks/ui/TaskPage';
import { Routes, Route } from 'react-router-dom';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<TaskPage />} />
      <Route path="/tasks" element={<TaskPage />} />
    </Routes>
  );
}

