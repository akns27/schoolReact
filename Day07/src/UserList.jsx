import React from 'react';
import User from './User';

const UserList = ({ users, onToggle, onRemove, onModify }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>연번</th>
          <th>이름</th>
          <th>이메일</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <User key={user.id} user={user} onToggle={onToggle} onRemove={onRemove} onModify={onModify} />
        ))}
      </tbody>
    </table>
  );
};

export default UserList;
