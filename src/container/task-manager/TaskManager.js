import React, { useState } from 'react';
import { AddTask, ListTask } from '../../component/index';

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

  const filterTasks = id => {
    const { tasks } = task;
    return tasks.filter(({ key }) => key !== id);
  }

  const deleteTask = keyId => {
    const tasks = filterTasks(keyId);
    setTask({
      ...task,
      tasks
    });
  }

  const { taskToAdd, tasks } = task;

  return (
    <div className="task-manager">
      <AddTask task={taskToAdd} updateCallbackTask={updateTask} addCallbackTask={addTask} />
      {tasks.length > 0 ? <ListTask tasks={tasks} deleteCallbackTask={deleteTask} /> : null}
    </div>
  );
};

export default TaskManager;