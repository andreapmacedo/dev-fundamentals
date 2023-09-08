import styles from './Post.module.css';

export function Post({ post }) {
  
  const [comments, setComments] = useState([
    'Post muito bacana, hein?!'
  ]);

  function handleCrateNewComment(event) {
    event.preventDefault()
    const newCommentText = event.target.comment.value;
    setComments([...comments, newCommentText]);
    event.target.comment.value = '';
  }

  return (
    <article className={styles.post}>
      <form onSubmit={handleCrateNewComment} className={styles.commentForm}>
        <textarea
          name="comment"
          placeholder="Deixe um comentário"
        />
      </form>
    </article>
  )
}
