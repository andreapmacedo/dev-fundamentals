import { ThemeProvider } from "styled-components"
import { MainHeader } from "./components/header/MainHeader"
import { defaultTheme } from "./themes/default"

export function App() {
  return (
    <ThemeProvider theme={defaultTheme} >
      <MainHeader />
      <h1>
        Hello World
      </h1>
    </ThemeProvider>
  )
}
