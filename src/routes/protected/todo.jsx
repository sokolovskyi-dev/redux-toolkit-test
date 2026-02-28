import AppBar from '@/components/todo/AppBar';
import TaskForm from '@/components/todo/TaskForm';
import TaskList from '@/components/todo/TaskList';

export function Component() {
  return (
    <div>
      <AppBar />
      <TaskForm />
      <TaskList />
    </div>
  );
}
