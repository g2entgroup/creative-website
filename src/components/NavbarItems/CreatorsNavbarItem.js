import React, { useState } from 'react';
import CreatorsModal from '@site/src/components/CreatorsModal';

const CreatorsNavbarItem = ({ mobile, ...props }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <a
        href="#"
        className="navbar__item navbar__link creators-navbar-item"
        onClick={handleClick}
        aria-label="Open Creators modal"
        {...props}
      >
        Creators
      </a>
      <CreatorsModal show={showModal} onHide={handleCloseModal} />
    </>
  );
};

export default CreatorsNavbarItem;
