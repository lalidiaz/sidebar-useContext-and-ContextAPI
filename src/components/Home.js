import React from 'react';
import { CgEditBlackPoint } from 'react-icons/cg';
import { useGlobalContext } from '../context';

const Home = () => {
  const { openSidebar, openModal } = useGlobalContext();

  return (
    <main>
      <button className="sidebar-toggle" onClick={openSidebar}>
        <CgEditBlackPoint />
      </button>
      <button className="btn" onClick={openModal}>
        Click here to subscribe!
      </button>
    </main>
  );
};

export default Home;
