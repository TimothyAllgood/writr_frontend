import React, { useEffect, useState } from 'react';
import TextEditor from '../../components/TextEditor/TextEditor';
import Prompt from '../../models/Prompt';
require('./HomePage.scss');

function HomePage() {
  // TODO : ADD FUNCTIONS TO SAVE STORY TO PC
  // TODO : ADD FUNCTIONS TO SAVE STORY TO DB

  const [prompts, setPrompts] = useState([]);
  const [title, setTitle] = useState('');
  const [story, setStory] = useState();

  const getPrompts = async () => {
    const allPrompts = await Prompt.getPrompts();
    setPrompts(allPrompts);
    setTitle(allPrompts[0]);
  };

  useEffect(() => {
    getPrompts();
  }, []);
  return (
    <section className="home">
      <TextEditor
        prompts={prompts}
        setTitle={setTitle}
        title={title}
        setStory={setStory}
        story={story}
      />
    </section>
  );
}

export default HomePage;
