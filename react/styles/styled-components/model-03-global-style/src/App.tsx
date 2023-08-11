import { ThemeProvider } from "styled-components"
import { MainHeader } from "./components/header/MainHeader"
import { defaultTheme } from "./themes/default"
import { GlobalStyle } from "./styles.ts/global"

export function App() {
  return (
    <ThemeProvider theme={defaultTheme} >
      <MainHeader />
      <h1>
        Hello World

      </h1>
      <GlobalStyle />
    </ThemeProvider>
  )
}
