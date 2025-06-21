import React, { useState } from 'react';
import TaskList from './components/TaskList';
import { Task } from './types'; // ← ここを追加

const App: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([
        { id: 1, title: 'タスク1', completed: false },
        { id: 2, title: 'タスク2', completed: false },
        { id: 3, title: 'タスク3', completed: false }
    ]);

    return (
        <div>
            <h1>毎日行いたいタスク管理アプリ</h1>
            <TaskList tasks={tasks} />
        </div>
    );
};

export default App;