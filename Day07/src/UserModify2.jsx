import { useRef, useState } from 'react';
import UserInput from './UserInput';
import UserList from './UserList';

const UserModify = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
  });

  const { name, email } = inputs;
  const [users, setUsers] = useState([]);
  const nextId = useRef(4);

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const onCreate = () => {
    const newUser = {
      id: nextId.current,
      name,
      email,
      selected: false,
    };
    setUsers(users.concat(newUser));
    nextId.current++;
    setInputs({ name: '', email: '' });
  };

  const onReset = () => {
    setInputs({ name: '', email: '' });
  };

  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id));
  };

  const onToggle = id => {
    setUsers(users.map(user =>
      user.id === id ? { ...user, selected: !user.selected } : user
    ));
  };

  const onModify = id => {
    setUsers(users.map(user =>
      user.id === id ? { ...user, name: inputs.name, email: inputs.email } : user
    ));
    setInputs({ name: '', email: '' });
  };

  return (
    <div>
      <UserInput
        name={name}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
        onReset={onReset}
      />
      <UserList
        users={users}
        onToggle={onToggle}
        onRemove={onRemove}
        onModify={onModify}
      />
    </div>
  );
};

export default UserModify;
