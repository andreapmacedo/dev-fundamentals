import { useState } from "react";
import styles from './Comment.module.css';


export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  return (
    <div className={styles.comment}>
      {/* A função não será executada na renderização */}
      <button onClick={() => setLikeCount(likeCount + 1)}>
        Aplaudir <span>{likeCount}</span>
      </button>
    </div>
  )
}
