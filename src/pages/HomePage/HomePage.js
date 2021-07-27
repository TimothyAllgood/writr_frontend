import React, { useEffect, useState } from 'react';
import TextEditor from '../../components/TextEditor/TextEditor';
import Prompt from '../../models/Prompt';
require('./HomePage.scss');

function HomePage() {
  // TODO : ADD FUNCTIONS TO SAVE STORY TO PC
  // TODO : ADD FUNCTIONS TO GENERATE AND CHANGE PROMPT
  const [prompts, setPrompts] = useState([]);

  const getPrompts = async () => {
    const allPrompts = await Prompt.getPrompts();
    setPrompts(allPrompts);
  };

  useEffect(() => {
    getPrompts();
  }, []);
  return (
    <section className="home">
      <TextEditor prompts={prompts} />
    </section>
  );
}

export default HomePage;
