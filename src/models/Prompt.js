import axios from 'axios';
import { shuffle } from '../util/shuffle';
const wpJSON = `https://www.reddit.com/r/WritingPrompts.json`;

export default class Prompt {
  static getPrompts = async () => {
    const res = await axios.get(wpJSON);
    const data = res.data.data.children;
    const prompts = data
      .filter((prompt) => prompt.data.link_flair_text === 'Writing Prompt') // Filters post that aren't prompts, such as mod posts
      .map(
        (prompt) =>
          prompt.data.title
            .replace(/\[.*?\]/g, '')
            .trim()
            .charAt(0)
            .toUpperCase() +
          prompt.data.title
            .replace(/\[.*?\]/g, '')
            .trim()
            .slice(1)
      ); // Maps filtered posts to array while removing and tag that this subreddit uses, [WP] for example
    shuffle(prompts); // Shuffles array
    return prompts;
  };
}
