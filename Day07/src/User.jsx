import React from 'react';

const User = ({ user, onToggle, onRemove, onModify }) => {
  const { id, name, email, selected } = user;

  return (
    <tr>
      <td>{id}</td>
      <td onClick={() => onToggle(id, user)} style={{ cursor: "pointer", color: selected ? "blue" : "black" }}>
        {name}
      </td>
      <td>{email}</td>
      <td>
        <button onClick={() => onRemove(id)}>삭제</button>
        <button onClick={() => onModify(id, user)}>수정</button>
      </td>
    </tr>
  );
};

export default User;
