import React, { useState } from 'react';
import SaveModal from '../SaveModal/SaveModal';
require('./EditorButtons.scss');

function EditorButtons({ nextPrompt }) {
  const [modal, setModal] = useState(false);
  return (
    <section className="editor-options">
      <div className="left">
        <p onClick={() => nextPrompt()} className="btn">
          Get New Prompt
        </p>
      </div>
      <div className="right">
        <p className="btn">Save</p>
        <p className="btn" onClick={() => setModal(true)}>
          Save As
        </p>
      </div>
      <SaveModal modal={modal} setModal={setModal} />
    </section>
  );
}

export default EditorButtons;
