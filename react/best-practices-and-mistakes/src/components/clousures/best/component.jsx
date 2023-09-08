


export function Component() {

  const [likeCount, setLikeCount] = useState(0);

  function handleLikeComment() {
    // o nome da variável state ou prevState é apenas uma convenção, pode ser qualquer nome
    setLikeCount((state) => {
      return state + 1
    });
    setLikeCount((prevState) => {
      return prevState + 1
    });
  }

  return (
    <>
      <button onClick={handleLikeComment}>
        <ThumbsUp />
        Aplaudir <span>{likeCount}</span>
      </button>
    </>
  )
}