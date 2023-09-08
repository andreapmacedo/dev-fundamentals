


export function Component() {

  const [likeCount, setLikeCount] = useState(0);

  function handleLikeComment() {
    // Essa forma de implementação faz com que o valor exibido no componente seja sempre o valor anterior ao atual
    setLikeCount(likeCount + 1);
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