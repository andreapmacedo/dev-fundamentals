import { useState } from "react";
import styles from './Comment.module.css';


export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    });
  }

  return (
    <div className={styles.comment}>
      <button onClick={handleLikeComment}>
        Aplaudir <span>{likeCount}</span>
      </button>
    </div>
  )
}
