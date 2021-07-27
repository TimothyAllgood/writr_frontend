import React from 'react';
require('./EditorButtons.scss');

function EditorButtons({ nextPrompt }) {
  return (
    <section className="editor-options">
      <p onClick={() => nextPrompt()}>Get New Prompt</p>
    </section>
  );
}

export default EditorButtons;
