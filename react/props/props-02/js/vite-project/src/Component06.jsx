// export function Component06 ({text, sub, children}) {
//   return (
//     <div>
//       <h1>{children}</h1>
//       <h1>{text}</h1>
//       <h1>{sub}</h1>
//     </div>
//   )
// }
export function Component06 (props) {
  const { children, text, sub } = props;
  return (
    <>
      <h1>{children}</h1>
      <h1>{text}</h1>
      <h1>{sub}</h1>
    </>
  )
}