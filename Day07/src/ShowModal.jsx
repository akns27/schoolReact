import { useEffect } from 'react';
import './style.css'

const ShowModal = ({ msg }) => {
  useEffect(() => {
    return () => {
      alert("Modal 컴포넌트 언마운트");
    };
  }, []);

  return (
    <div id="modal">{msg}</div>
  );
};

export default ShowModal;
