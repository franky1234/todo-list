import React from 'react';
import './ListTask.scss';

const ListTask = ({ tasks, deleteCallbackTask }) => {
  const onClickDeleteTask = idKey => deleteCallbackTask(idKey)

  return (
    <ul className="task-list">
      {tasks.map(({ key, name }) =>
        <li key={key} name="li">{name} <button name="btn" onClick={() => onClickDeleteTask(key)}>Remove</button></li>)}
    </ul>
  );
};
export default ListTask;