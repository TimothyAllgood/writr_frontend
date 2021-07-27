import React from 'react';
import { saveAsTxt, saveAsPdf, saveAsDoc } from '../../util/save';
require('./SaveModal.scss');

function SaveModal({ modal, setModal, story }) {
  // TODO :  FIX SAVE FORMATTING FOR DOCX

  return (
    <div className={`modal preload ${!modal ? 'close' : 'open'}`}>
      <i className="fas fa-times close-btn" onClick={() => setModal(false)}></i>
      <p className="btn" onClick={() => saveAsPdf(story)}>
        Save As .pdf
      </p>
      <p className="btn" onClick={() => saveAsDoc(story)}>
        Save As .doc
      </p>
      <p className="btn" onClick={() => saveAsTxt(story)}>
        Save As .txt
      </p>
    </div>
  );
}

export default SaveModal;
