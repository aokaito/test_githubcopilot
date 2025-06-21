import React, { useState } from 'react';
import TaskList from './components/TaskList';

const App: React.FC = () => {
    const [tasks, setTasks] = useState<string[]>(['タスク1', 'タスク2', 'タスク3']);

    return (
        <div>
            <h1>毎日行いたいタスク管理アプリ</h1>
            <TaskList tasks={tasks} />
        </div>
    );
};

export default App;