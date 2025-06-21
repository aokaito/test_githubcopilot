import React from 'react';
import { Task } from '../types';

interface TaskListProps {
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.title} - {task.completed ? 'Completed' : 'Pending'}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;