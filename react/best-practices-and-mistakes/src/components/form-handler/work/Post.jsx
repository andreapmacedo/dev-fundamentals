import styles from './Post.module.css';

export function Post({ post }) {
 
  const [comments, setComments] = useState([
    'Post muito bacana, hein?!'
  ]);

  const [newCommentText, setNewCommentText] = useState('');

  function handleCrateNewComment(event) {
    event.preventDefault()

    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  function handleNewCommentChange(event) {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  return (
    <article className={styles.post}>
      <form onSubmit={handleCrateNewComment} className={styles.commentForm}>
        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
        />
      </form>
    </article>
  )
}
