import { useState } from "react";
import styles from './Comment.module.css';


export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  return (
    <div className={styles.comment}>
      {/* Vai gerar um loop infinito pois a função será executada toda vez que houver uma nova renderização */}
      <button onClick={setLikeCount(likeCount + 1)}> 
        Aplaudir <span>{likeCount}</span>
      </button>
    </div>
  )
}
