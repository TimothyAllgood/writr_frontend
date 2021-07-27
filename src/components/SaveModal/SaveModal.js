import React from 'react';
require('./SaveModal.scss');

function SaveModal({ modal, setModal }) {
  return (
    <div className={`modal preload ${!modal ? 'close' : 'open'}`}>
      <i className="fas fa-times close-btn" onClick={() => setModal(false)}></i>
      <p className="btn">Save As .pdf</p>
      <p className="btn">Save As .doc</p>
      <p className="btn">Save As .txt</p>
    </div>
  );
}

export default SaveModal;
