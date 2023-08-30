export function Component06 ({text, sub}, {children}) {
  return (
    <>
      <h1>{children}</h1>
      <h1>{text}</h1>
      <h1>{sub}</h1>
    </>
  )
}
// export function Component06 (props, {children}) {
//   return (
//     <>
//       <h1>{children}</h1>
//       <h1>{props.text}</h1>
//     </>
//   )
// }