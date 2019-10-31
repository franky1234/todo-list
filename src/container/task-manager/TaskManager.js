import React, { useState } from 'react';
import { AddTask } from '../../component/index';

const TaskManager = () => {
  const [task, setTask] = useState({
    taskToAdd: '',
    tasks: []
  });
  const [counterId, setCounterId] = useState(0);

  const updateTask = taskToAdd => {
    setTask({
      ...task,
      taskToAdd
    });
  }
  const incrementId = () => {
    setCounterId(counterId + 1);
  }

  const addTask = () => {
    const { taskToAdd: name, tasks } = task;
    if (name.trim()) {
      const newTask = { key: counterId, name: name };
      setTask({
        tasks: [...tasks, newTask],
        taskToAdd: ''
      });
      incrementId();
    }
  }

  const { taskToAdd, tasks } = task;

  return (
    <div className="task-manager">
      <AddTask task={taskToAdd} updateCallbackTask={updateTask} addCallbackTask={addTask} />

    </div>
  );
};

export default TaskManager;